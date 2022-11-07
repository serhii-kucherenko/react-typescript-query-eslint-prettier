import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL || 'http://localhost:8080/api/v1';

const fetcher = axios.create({
  baseURL: BASE_URL,
});

export const setupInterceptor = (
  onError: (error: string) => void,
  getAccessTokenSilently: () => Promise<string>,
): void => {
  const errorHandler = (error: AxiosError): Promise<undefined | never> => {
    const response = error?.response;
    const responseData = response?.data || ({} as any);
    const errorMessage = responseData?.message || responseData?.details || responseData?.error;

    onError(errorMessage || 'Server error');

    return Promise.reject(error);
  };

  const responseHandler = (response: AxiosResponse): any => {
    if (response?.status === 200) return response?.data;

    return response;
  };

  fetcher.interceptors.response.use(responseHandler, errorHandler);

  fetcher.interceptors.request.use(async (config): Promise<AxiosRequestConfig> => {
    if (config?.skipAuthorization) {
      return config;
    }

    const token = await getAccessTokenSilently().catch(() => {});

    if (config?.headers) config.headers.Authorization = `Bearer ${token}`;

    return config;
  }, errorHandler);
};

export { fetcher };

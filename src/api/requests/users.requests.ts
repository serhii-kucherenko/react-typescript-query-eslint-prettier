import { fetcher } from 'src/api/fetcher';
import {
  IGetEducationFileResponse,
  IUpdateUserStatusParams,
  IUserPersonalInfo,
} from 'src/api/requests/types/users.types';

const getMyPersonalInfo = (): Promise<IUserPersonalInfo> => {
  return fetcher.get('/users/current/personal-info');
};

const getEducationFile = (educationalFileId: number): Promise<IGetEducationFileResponse> => {
  return fetcher.get(`/users/current/education-files/${educationalFileId}/download-url`);
};

const changeUserStatus = ({ userId }: IUpdateUserStatusParams): Promise<void> => {
  return fetcher.put(`/users/${userId}/account-status`, {
    accountStatus: 'active',
  });
};

export const usersRequests = {
  getMyPersonalInfo,
  getEducationFile,
  changeUserStatus,
};

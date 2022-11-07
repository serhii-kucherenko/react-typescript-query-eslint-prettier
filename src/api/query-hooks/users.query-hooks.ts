import {
  IGetEducationFileResponse,
  IUpdateUserStatusParams,
  IUserPersonalInfo,
} from 'src/api/requests/types/users.types';
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { usersRequests } from 'src/api/requests/users.requests';

const useGetMyPersonalInfo = (
  options: UseQueryOptions<IUserPersonalInfo, Error, IUserPersonalInfo, string[]> = {},
): UseQueryResult<IUserPersonalInfo> =>
  useQuery(['useGetMyPersonalInfo'], usersRequests.getMyPersonalInfo, options);

const useGetEducationFile = (
  options: UseMutationOptions<IGetEducationFileResponse, Error, number> = {},
): UseMutationResult<IGetEducationFileResponse, Error, number> =>
  useMutation(['useGetEducationalFileUrl'], usersRequests.getEducationFile, options);

const useChangeUserStatus = (
  options: UseMutationOptions<void, Error, IUpdateUserStatusParams> = {},
): UseMutationResult<void, Error, IUpdateUserStatusParams> =>
  useMutation(['useChangeUserStatus'], usersRequests.changeUserStatus, options);

export const usersQueryHooks = {
  useGetMyPersonalInfo,
  useGetEducationFile,
  useChangeUserStatus,
};

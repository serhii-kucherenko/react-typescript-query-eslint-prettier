export enum EUserRole {
  ADMIN = 'ADMIN',
  CLIENT = 'CLIENT',
  ASSET_MANAGER = 'ASSET_MANAGER',
  WEALTH_MANAGER = 'WEALTH_MANAGER',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

export interface IUserProfile {
  id: number;
  firstName: string | null;
  lastName: string | null;
  imageLink: string | null;
  roles?: EUserRole[];
}

export interface IUserPersonalInfo extends IUserProfile {
  videoLink?: string;
  address?: string;
  responsibilities?: string;
  email: string | null;
  state?: string | null;
  city?: string | null;
  yearsOfExperience?: number | null;
  position?: string | null;
  phoneNumber?: string | null;
  university?: string;
  linkedIn?: string;
  interests?: string[];
  areasOfExpertise?: string[] | null;
  accreditations?: string[];
  website?: string;
  documents?: string[];
  companyName?: string;
  matchingScore?: number;
}

export interface IGetEducationFileResponse {
  url: string;
}

export interface IUpdateUserStatusParams {
  userId: number;
}

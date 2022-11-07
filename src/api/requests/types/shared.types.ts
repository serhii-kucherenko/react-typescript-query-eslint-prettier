export interface IPaginated<T> {
  totalPages: number;
  totalElements: number;
  pageable: Pageable;
  last: boolean;
  first: boolean;
  numberOfElements: number;
  size: number;
  content?: T[] | null;
  number: number;
  sort: Sort;
}

export interface Pageable {
  sort: Sort;
  pageNumber: number;
  pageSize: number;
  offset: number;
  unpaged: boolean;
  paged: boolean;
}

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
}

export interface IGetUrlResponse {
  uploadUrl: string;
  objectToCreateUrl: string;
}

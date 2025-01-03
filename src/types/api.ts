import { Endpoints } from '@/shared/constants';

interface Collection<T> {
  docs: T;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number | null;
  page: number;
  pagingCounter: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
}

interface Result<T> {
  data: T | null;
  error: unknown | null;
}

interface FetchConfig {
  readonly baseURL: string;
}

interface FetchParams {
  url: Endpoints | string;
  query?: ObjectParams;
  options?: RequestInit;
  locale?: string;
}

type Query = string | number | boolean | undefined;
type SearchParams = Query | Query[];
type ObjectParams = Record<string | number, SearchParams>;
type PromiseResult<T> = Promise<Result<T>>;

export type {
  Query,
  Collection,
  SearchParams,
  ObjectParams,
  PromiseResult,
  Result,
  FetchConfig,
  FetchParams
};

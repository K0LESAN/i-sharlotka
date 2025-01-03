import type {
  FetchConfig,
  FetchParams,
  Result,
  PromiseResult
} from '@/types/api';
import { env } from './constants';
import { buildQuery } from './utils';

const fetchConfig: FetchConfig = {
  baseURL: env.PAYLOAD_CMS_URL
};

async function fetchCMS<T>({
  url,
  query = {},
  options = {},
  locale
}: FetchParams): PromiseResult<T> {
  const result: Result<T> = {
    data: null,
    error: null
  };

  try {
    const response: Response = await fetch(
      `${fetchConfig.baseURL}${url}${buildQuery({
        ...query,
        locale
      })}`,
      {
        mode: 'cors',
        credentials: 'include',
        ...options
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP status error ${response.status}`);
    }

    const data: T = await response.json();

    result.data = data;
  } catch (error: unknown) {
    result.error = error;
  }

  return result;
}

export type { FetchConfig, FetchParams, Result };

export { fetchConfig, fetchCMS };

import type { ObjectParams, SearchParams } from '@/types/api';
import { locales, type Locales } from './constants';

export function checkLocale(locale: string): boolean {
  return locales.some(
    (currentLocale: Locales): boolean => currentLocale === locale
  );
}

export function buildQuery(queryParams: ObjectParams): string {
  const resultQuery: string[] = [];

  for (const key in queryParams) {
    const searchParams: SearchParams = queryParams[key];

    if (Array.isArray(searchParams)) {
      resultQuery.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(searchParams.join(','))}`
      );
    } else if (searchParams !== undefined) {
      resultQuery.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(searchParams)}`
      );
    }
  }

  return `?${resultQuery.join('&')}`;
}

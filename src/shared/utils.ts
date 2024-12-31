import { locales, type Locales } from './constants';

export function checkLocale(locale: string): boolean {
  return locales.some(
    (currentLocale: Locales): boolean => currentLocale === locale
  );
}

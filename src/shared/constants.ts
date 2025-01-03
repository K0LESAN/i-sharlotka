import type { Env } from '@/types/env';
import type { DefaultLocale, Locales } from '@/types/localization';

const locales: Locales[] = ['ru', 'en'];
const defaultLocale: DefaultLocale = 'ru';

const env: Env = {
  PAYLOAD_CMS_URL: process.env.PAYLOAD_CMS_URL || '',
  BASE_URL: process.env.BASE_URL || ''
};

enum Endpoints {
  Cases = '/cases'
}

export {
  Endpoints,
  locales,
  defaultLocale,
  env,
  type Locales,
  type DefaultLocale
};

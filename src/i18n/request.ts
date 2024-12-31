import { getRequestConfig } from 'next-intl/server';
import { defaultLocale } from '@/shared/constants';
import { checkLocale } from '@/shared/utils';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale: string | undefined = await requestLocale;

  if (!locale || !checkLocale(locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default
  };
});

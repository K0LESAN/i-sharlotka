import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from '@/shared/constants';

export const routing = defineRouting({
  locales,
  defaultLocale,
  localeCookie: {
    name: 'locale',
    secure: true
  },
  localeDetection: true,
  localePrefix: 'always'
});

export const {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname,
  permanentRedirect
} = createNavigation(routing);

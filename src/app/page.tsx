import { getLocale } from 'next-intl/server';
import { notFound, RedirectType } from 'next/navigation';
import { redirect } from '@/i18n/routing';
import { checkLocale } from '@/shared/utils';

export default async function RootPage() {
  const locale: string = await getLocale();

  if (checkLocale(locale)) {
    redirect(
      {
        href: '/',
        locale
      },
      RedirectType.replace
    );
  } else {
    notFound();
  }
}

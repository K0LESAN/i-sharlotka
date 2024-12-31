import { checkLocale } from '@/shared/utils';
import { getLocale } from 'next-intl/server';
import { notFound, redirect, RedirectType } from 'next/navigation';

export default async function RootPage() {
  const locale: string = await getLocale();

  if (checkLocale(locale)) {
    redirect(`/${locale}`, RedirectType.replace);
  } else {
    notFound();
  }
}

import { notFound } from 'next/navigation';
import { type Locales, locales } from '@/shared/constants';
import { checkLocale } from '@/shared/utils';
import Container from '@/widgets/container';
import Header from '@/widgets/header';
import { ParamsWithLocale } from '@/types/localization';

export function generateStaticParams() {
  return locales.map((locale: Locales): { locale: Locales } => ({
    locale
  }));
}

export default async function HomeLayout({
  children,
  params
}: ParamsWithLocale & { children: React.ReactNode }) {
  const { locale }: { locale: string } = await params;

  if (!checkLocale(locale)) {
    notFound();
  }

  return (
    <>
      <Container>
        <Header />
      </Container>
      <main>{children}</main>
    </>
  );
}

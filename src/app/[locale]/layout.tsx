import { type Locales, locales } from '@/shared/constants';
import { checkLocale } from '@/shared/utils';
import Container from '@/widgets/container';
import Header from '@/widgets/header';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map((locale: Locales): { locale: Locales } => ({
    locale
  }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale }: { locale: string } = await params;

  if (!checkLocale(locale)) {
    notFound();
  }

  return (
    <>
      <Container>
        <Header />
      </Container>
      {children}
    </>
  );
}

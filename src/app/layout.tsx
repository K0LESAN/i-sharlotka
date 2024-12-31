import { type AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import { Open_Sans, Montserrat, Roboto, Raleway } from 'next/font/google';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import localFont from 'next/font/local';
import './globals.scss';

const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  preload: false,
  variable: '--open-sans',
  fallback: ['sans-serif']
});
const montserrat = Montserrat({
  weight: ['400', '900'],
  preload: false,
  variable: '--montserrat',
  fallback: ['sans-serif']
});
const roboto = Roboto({
  weight: ['400', '700'],
  preload: false,
  variable: '--roboto',
  fallback: ['sans-serif']
});
const raleway = Raleway({
  weight: '400',
  preload: false,
  variable: '--raleway',
  fallback: ['sans-serif']
});
const gilroy = localFont({
  src: [
    {
      path: '../shared/assets/fonts/gilroy/gilroy-ultra-light.woff',
      weight: '200'
    },
    {
      path: '../shared/assets/fonts/gilroy/gilroy-light.woff',
      weight: '300'
    },
    {
      path: '../shared/assets/fonts/gilroy/gilroy-regular.woff',
      weight: '400'
    },
    {
      path: '../shared/assets/fonts/gilroy/gilroy-medium.woff',
      weight: '500'
    },
    {
      path: '../shared/assets/fonts/gilroy/gilroy-semi-bold.woff',
      weight: '600'
    },
    {
      path: '../shared/assets/fonts/gilroy/gilroy-bold.woff',
      weight: '700'
    },
    {
      path: '../shared/assets/fonts/gilroy/gilroy-extra-bold.woff',
      weight: '800'
    },
    {
      path: '../shared/assets/fonts/gilroy/gilroy-heavy.woff',
      weight: '900'
    }
  ],
  variable: '--gilroy',
  fallback: ['sans-serif']
});
const akrobat = localFont({
  src: '../shared/assets/fonts/akrobat/akrobat-regular.woff',
  weight: '400',
  variable: '--akrobat',
  fallback: ['sans-serif']
});

export async function generateMetadata() {
  const locale: string = await getLocale();
  const t = await getTranslations({
    locale,
    namespace: 'metadata'
  });

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale: string = await getLocale();
  const messages: AbstractIntlMessages = await getMessages({
    locale
  });

  return (
    <html lang={locale}>
      <body
        className={`${openSans.variable} ${montserrat.variable} ${raleway.variable} ${roboto.variable} ${gilroy.variable} ${akrobat.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

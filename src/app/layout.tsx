import { Open_Sans, Montserrat, Roboto, Raleway } from 'next/font/google';
import localFont from 'next/font/local';
import type { Metadata } from 'next';
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
      path: './fonts/gilroy/gilroy-ultra-light.eot',
      weight: '200'
    },
    {
      path: './fonts/gilroy/gilroy-ultra-light.ttf',
      weight: '200'
    },
    {
      path: './fonts/gilroy/gilroy-ultra-light.woff',
      weight: '200'
    },
    {
      path: './fonts/gilroy/gilroy-light.eot',
      weight: '300'
    },
    {
      path: './fonts/gilroy/gilroy-light.ttf',
      weight: '300'
    },
    {
      path: './fonts/gilroy/gilroy-light.woff',
      weight: '300'
    },
    {
      path: './fonts/gilroy/gilroy-regular.eot',
      weight: '400'
    },
    {
      path: './fonts/gilroy/gilroy-regular.ttf',
      weight: '400'
    },
    {
      path: './fonts/gilroy/gilroy-regular.woff',
      weight: '400'
    },
    {
      path: './fonts/gilroy/gilroy-medium.eot',
      weight: '500'
    },
    {
      path: './fonts/gilroy/gilroy-medium.ttf',
      weight: '500'
    },
    {
      path: './fonts/gilroy/gilroy-medium.woff',
      weight: '500'
    },
    {
      path: './fonts/gilroy/gilroy-semi-bold.eot',
      weight: '600'
    },
    {
      path: './fonts/gilroy/gilroy-semi-bold.ttf',
      weight: '600'
    },
    {
      path: './fonts/gilroy/gilroy-semi-bold.woff',
      weight: '600'
    },
    {
      path: './fonts/gilroy/gilroy-bold.eot',
      weight: '700'
    },
    {
      path: './fonts/gilroy/gilroy-bold.ttf',
      weight: '700'
    },
    {
      path: './fonts/gilroy/gilroy-bold.woff',
      weight: '700'
    },
    {
      path: './fonts/gilroy/gilroy-extra-bold.eot',
      weight: '800'
    },
    {
      path: './fonts/gilroy/gilroy-extra-bold.ttf',
      weight: '800'
    },
    {
      path: './fonts/gilroy/gilroy-extra-bold.woff',
      weight: '800'
    },
    {
      path: './fonts/gilroy/gilroy-heavy.eot',
      weight: '900'
    },
    {
      path: './fonts/gilroy/gilroy-heavy.ttf',
      weight: '900'
    },
    {
      path: './fonts/gilroy/gilroy-heavy.woff',
      weight: '900'
    }
  ],
  variable: '--gilroy',
  fallback: ['sans-serif']
});
const akrobat = localFont({
  src: [
    {
      path: './fonts/akrobat/akrobat-regular.eot',
      weight: '400'
    },
    {
      path: './fonts/akrobat/akrobat-regular.otf',
      weight: '400'
    },
    {
      path: './fonts/akrobat/akrobat-regular.ttf',
      weight: '400'
    },
    {
      path: './fonts/akrobat/akrobat-regular.woff',
      weight: '400'
    }
  ],
  variable: '--akrobat',
  fallback: ['sans-serif']
});

export const metadata: Metadata = {
  title: 'iSharlotka',
  description: 'Делаем индивидуальные аксессуары на смартфоны'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body
        className={`${openSans.variable} ${montserrat.variable} ${raleway.variable} ${roboto.variable} ${gilroy.variable} ${akrobat.variable}`}>
        {children}
      </body>
    </html>
  );
}

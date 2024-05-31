import { Inter, Raleway, Noto_Sans } from 'next/font/google';

export const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const notoSans = Noto_Sans({
  weight: ['200', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap',
});

export const raleway = Raleway({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

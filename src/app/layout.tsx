import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from './lib/registry';
import ReduxProvider from './reduxToolkitProvider';
import ReactQueryProvider from './reactQueryProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Todo list App',
  description: 'Simple Todo list App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <ReactQueryProvider>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </ReactQueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}

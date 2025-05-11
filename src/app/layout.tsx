import { ReactNode } from 'react';
import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Providers from './components/Providers';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

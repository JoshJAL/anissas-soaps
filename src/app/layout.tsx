import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import Main from '@/components/Main';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={rubik.className}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}

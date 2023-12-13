import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import Main from '@/components/Main';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Anissa's Soaps",
  description: 'Traditional Lebanese soaps, handmade with love.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta property='og:title' content="Anissa's Soaps" />
        <meta property='og:description' content='Traditional Lebanese soaps, handmade with love.' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='<generated>' />
        <meta property='twitter:image' content='<generated>' />
      </head>
      <body className={rubik.className}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { FavoritesProvider } from '@/providers/FavoritesProvider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'peachflix',
  description: 'Movie Library Application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <FavoritesProvider>{children}</FavoritesProvider>
      </body>
    </html>
  );
}

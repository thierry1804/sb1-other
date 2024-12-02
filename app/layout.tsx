import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mobile Shopping App',
  description: 'A modern mobile shopping experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-16 pb-16 min-h-screen bg-gray-50">
          <div className="max-w-lg mx-auto">{children}</div>
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
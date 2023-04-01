import './globals.css';

import { Inter } from 'next/font/google';

import { AppHeader } from '@/components/app-header';

import { Providers } from './providers';

export const metadata = {
  title: 'Frontend Mentor | Rest Countries',
  description: 'Frontend Mentor Challenge - Rest Countries with Theme Switcher',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-slate-100 font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-100">
        <Providers>
          <AppHeader />
          <main className="mx-auto max-w-screen-xl px-4 pb-20">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

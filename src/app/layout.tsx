import Provider from './provider';
import React from 'react';
import './globals.css';
import { ColorModeProvider } from '@/components/ui/color-mode';
import { NextIntlClientProvider } from 'next-intl';
import { Toaster } from 'react-hot-toast';
import { BottomBanner } from '@/components/BottomBanner';
import { Metadata } from 'next';
import AppCheckWrapper from '@/app/AppCheckWrapper';

export const metadata: Metadata = {
  title: 'Pit My Doro',
  description:
    'Pitmydoro, una forma distinta de usar el método Pomodoro: enfócate, descansa y avanza a tu ritmo, sin presiones.',
  icons: './favicon.ico',
  openGraph: {
    title: 'Pit My Doro',
    description:
      'Pitmydoro, una forma distinta de usar el método Pomodoro: enfócate, descansa y avanza a tu ritmo, sin presiones.',
    url: 'https://pitmydoro.com',
    siteName: 'Pit My Doro',
    images: [
      {
        url: 'https://pitmydoro.com/images/cover.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pit My Doro',
    description:
      'Pitmydoro, una forma distinta de usar el método Pomodoro: enfócate, descansa y avanza a tu ritmo, sin presiones.',
    images: ['https://pitmydoro.com/images/cover.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'en'} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider>
          <Provider>
            <ColorModeProvider enableSystem={false}>
              <Toaster position='top-right' />
              <AppCheckWrapper>{children}</AppCheckWrapper>
              <BottomBanner />
            </ColorModeProvider>
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

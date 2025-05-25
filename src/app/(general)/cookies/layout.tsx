import React from 'react';
import { Metadata } from 'next';
import { MainContainer } from '@/components/MainContainer';

export const metadata: Metadata = {
  title: 'Pit My Doro | Cookies',
  description: 'Terms and Conditions',
  icons: './favicon.ico',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <MainContainer customGrid={'4fr 12fr 4fr'}>{children}</MainContainer>;
}

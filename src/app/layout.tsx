import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Navbar from '@/components/Navbar';

import { Document } from './Document';
import NextLoader from './NextLoader';

export const metadata: Metadata = {
  title: 'PeakTrade',
  description: "Climber's Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Document>
      <Navbar />
      {children}
      <NextLoader />
    </Document>
  );
}

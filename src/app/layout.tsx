import type { Metadata } from 'next';

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

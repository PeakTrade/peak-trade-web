import { Show } from '@chakra-ui/react';
import type { Metadata } from 'next';

import PageContainer from '@/components/PageContainer';
import NavbarDesktop from '@/features/layout/Navbar/NavbarDesktop';
import NavbarMobile from '@/features/layout/Navbar/NavbarMobile';

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
      <NextLoader />
      <PageContainer>
        <Show above="md">
          <NavbarDesktop />
        </Show>
        {children}
      </PageContainer>
      <Show below="md">
        <NavbarMobile />
      </Show>
    </Document>
  );
}

'use client';

import dynamic from 'next/dynamic';

import Loader from '@/components/Loader';

const PageMap = dynamic(() => import('@/features/map/PageMap'), {
  ssr: false,
  loading: () => <Loader />,
});

const Page = () => {
  return <PageMap />;
};

export default Page;

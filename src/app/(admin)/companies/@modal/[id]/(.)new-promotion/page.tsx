'use client';

import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '../../../../../components/PromotionFormModal';

export interface PageProps {
  params: { id: string };
}

const Page: FC<PageProps> = ({ params }) => {
  const router = useRouter();

  return (
    <PromotionFormModal
      companyId={params.id}
      show={true}
      onClose={() => router.back()}
    />
  );
};

export default Page;

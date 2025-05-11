'use client';

import React, { FC, use } from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '../../../../../components/PromotionFormModal';

export interface PageProps {
  params: Promise<{ id: string }>;
}

const Page: FC<PageProps> = ({ params }) => {
  const router = useRouter();
  const { id } = use(params);

  return (
    <PromotionFormModal
      companyId={id}
      show={true}
      onClose={() => router.back()}
    />
  );
};

export default Page;

'use client';

import React, { FC, use } from 'react';
import PromotionForm from '../../../../components/PromotionForm';

export interface PageProps {
  params: Promise<{ id: string }>;
}
const Page: FC<PageProps> = ({ params }) => {
  const { id } = use(params);

  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={id} />
    </div>
  );
};

export default Page;

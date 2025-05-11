'use client';

import React, { FC } from 'react';
import PromotionForm from '../../../../components/PromotionForm';

export interface PageProps {
  params: { id: string };
}
const Page: FC<PageProps> = ({ params }) => {
  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={params.id} />
    </div>
  );
};

export default Page;

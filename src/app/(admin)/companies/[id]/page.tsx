import React, { FC } from 'react';
import getQueryClient from '../../../../lib/utils/getQueryClient';
import { Company, getCompany, getPromotions } from '../../../../lib/api';
import { notFound } from 'next/navigation';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import CompanyInfo from '../../../components/CompanyInfo';
import CompanyPromotions from '../../../components/CompanyPromotions';

export interface PageProps {
  params: Promise<{ id: string }>;
}

const Page: FC<PageProps> = async ({ params }) => {
  const queryClient = getQueryClient();
  const { id } = await params;

  await queryClient.prefetchQuery({
    queryKey: ['companies', id],
    queryFn: () => getCompany(id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  await queryClient.prefetchQuery({
    queryKey: ['promotions', id],
    queryFn: () => getPromotions({ companyId: id }, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData(['companies', id]) as Company;
  if (!company) {
    notFound();
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="py-6 px-10 grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <CompanyInfo companyId={id} />
        </div>
        <div className="col-span-9">
          <CompanyPromotions companyId={id} />
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default Page;

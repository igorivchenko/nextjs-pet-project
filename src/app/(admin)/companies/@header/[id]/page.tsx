import React, { FC } from 'react';
import Header from '../../../../components/Header';
import getQueryClient from '../../../../../lib/utils/getQueryClient';
import { Company, getCompany } from '../../../../../lib/api';

export interface PageProps {
  params: Promise<{ id: string }>;
}

const Page: FC<PageProps> = async ({ params }) => {
  const { id } = await params;
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', id],
    queryFn: () => getCompany(id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData(['companies', id]) as Company;

  return <Header>{company?.title}</Header>;
};

export default Page;

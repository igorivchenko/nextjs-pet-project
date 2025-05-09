import React from 'react';
import Header from '../../../../components/Header';

export interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  return <Header>{`Company (${id})`}</Header>;
};

export default Page;

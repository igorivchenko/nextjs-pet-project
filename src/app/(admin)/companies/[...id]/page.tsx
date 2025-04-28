import { FC } from 'react';
import Header from '../../../components/Header';

export interface PageProps {
  params: { id: string[] };
}

const Page: FC<PageProps> = ({ params }) => {
  return (
    <>
      <Header>Companies ({String(params.id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
};

export default Page;

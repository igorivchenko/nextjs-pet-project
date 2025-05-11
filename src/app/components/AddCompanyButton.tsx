'use client';

import { useRouter } from 'next/navigation';
import Button from './Button';

const AddCompanyButton = () => {
  const router = useRouter();

  return (
    <>
      <Button onClick={() => router.push('/companies/new', { scroll: false })}>
        Add company
      </Button>
    </>
  );
};

export default AddCompanyButton;

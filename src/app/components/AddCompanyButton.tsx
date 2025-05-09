'use client';

import { useRouter } from 'next/navigation';
// import { useState } from 'react';
import Button from './Button';
// import dynamic from 'next/dynamic';

// const CompanyFormModal = dynamic(() => import('./CompanyFormModal'), {
//   ssr: false,
// });

const AddCompanyButton = () => {
  // const [show, setShow] = useState(false);
  const router = useRouter();

  return (
    <>
      <Button onClick={() => router.push('/companies/new')}>Add company</Button>
    </>
  );
};

export default AddCompanyButton;

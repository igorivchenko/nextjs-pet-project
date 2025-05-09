'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Modal from '../../../../components/Modal';
import CompanyForm from '../../../../components/CompanyForm';

export default function Page() {
  const router = useRouter();
  return (
    <Modal show={true} onClose={() => router.back()}>
      <CompanyForm onSubmit={console.log} />
    </Modal>
  );
}

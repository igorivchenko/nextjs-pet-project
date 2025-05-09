'use client';

import CompanyForm from '../../../components/CompanyForm';

const Page = () => {
  return (
    <div className="py-6 px-10">
      <CompanyForm onSubmit={console.log} />
    </div>
  );
};

export default Page;

import React from 'react';
import Toolbar from '../../../components/ToolBar';
import AddCompanyButton from '../../../components/AddCompanyButton';
import SearchInput from '../../../components/SearchInput';

const Page = () => {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
};

export default Page;

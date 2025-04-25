import AddCompanyButton from '../components/AddCompanyButton';
import CompanyRow from '../components/CompanyRow';
import CompanyTable from '../components/CompanyTable';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import { Status } from '../components/StatusLabel';
import Toolbar from '../components/ToolBar';

const Page = () => {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category="Products"
          company="Costco"
          status={Status.Pending}
          promotion={true}
          country="USA"
          joinedDate="02.19.2023"
        />
      </CompanyTable>
    </>
  );
};

export default Page;

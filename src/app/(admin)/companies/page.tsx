import CompanyRow from '../../components/CompanyRow';
import CompanyTable from '../../components/CompanyTable';
import { Status } from '../../components/StatusLabel';

const Page = () => {
  return (
    <>
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

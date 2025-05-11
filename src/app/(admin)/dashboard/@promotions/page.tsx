import { getPromotions } from '../../../../lib/api';
import DashboardCard from '../../../components/DashboardCard';
import SummaryTable from '../../../components/SummaryTable';
import SummaryTableCell from '../../../components/SummaryTableCell';
import SummaryTableHeader from '../../../components/SummaryTableHeader';

const Page = async () => {
  const data = await getPromotions();

  return (
    <DashboardCard label="Promotions">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Name</SummaryTableHeader>
            <SummaryTableHeader align="center">%</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ id, title, companyTitle, discount }) => (
          <tr key={id}>
            <SummaryTableCell company={true}>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{title}</SummaryTableCell>
            <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
};

export default Page;

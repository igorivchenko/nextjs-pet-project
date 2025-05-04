import { getSummaryPromotions } from '../../../../lib/api';
import DashboardCard from '../../../components/DashboardCard';
import SummaryTable from '../../../components/SummaryTable';
import SummaryTableCell from '../../../components/SummaryTableCell';
import SummaryTableHeader from '../../../components/SummaryTableHeader';

const Page = async () => {
  const data = await getSummaryPromotions();

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
        {data.map(({ promotionId, companyTitle, promotionName, discount }) => (
          <tr key={promotionId}>
            <SummaryTableCell company={true}>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{promotionName}</SummaryTableCell>
            <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
};

export default Page;

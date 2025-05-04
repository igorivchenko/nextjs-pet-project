import React from 'react';
import { getSummarySales } from '../../../../lib/api';
import DashboardCard from '../../../components/DashboardCard';
import SummaryTable from '../../../components/SummaryTable';
import SummaryTableHeader from '../../../components/SummaryTableHeader';
import SummaryTableCell from '../../../components/SummaryTableCell';

export default async function Page() {
  const data = await getSummarySales();

  return (
    <DashboardCard label="Sales details">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <SummaryTableCell company={true}>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}

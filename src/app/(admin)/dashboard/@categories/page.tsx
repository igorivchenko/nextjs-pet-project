import { getSummaryCategories } from '../../../../lib/api';
import DashboardCard from '../../../components/DashboardCard';
import StatCard, { StatCardType } from '../../../components/StatCard/StatCard';

const Page = async () => {
  const data = await getSummaryCategories();

  return (
    <DashboardCard label="Categories of companies">
      <ul className="grid grid-cols-12 gap-3 pb-5 px-5">
        {data.map(({ categoryId, categoryTitle, count }) => (
          <li
            key={categoryId}
            className="col-span-3 odd:text-purple-200 even:text-lime-200"
          >
            <StatCard
              type={StatCardType.Dark}
              label={categoryTitle}
              counter={count}
            />
          </li>
        ))}
      </ul>
    </DashboardCard>
  );
};

export default Page;

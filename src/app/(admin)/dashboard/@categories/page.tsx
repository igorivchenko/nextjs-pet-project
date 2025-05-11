import { getCategories, getCompanies } from '../../../../lib/api';
import getCountById from '../../../../lib/utils/getCountById';
import DashboardCard from '../../../components/DashboardCard';
import StatCard, { StatCardType } from '../../../components/StatCard/StatCard';

const Page = async () => {
  const categories = await getCategories();
  const companies = await getCompanies();

  const counts = getCountById(companies, 'categoryId');

  return (
    <DashboardCard label="Categories of companies">
      <ul className="grid grid-cols-12 gap-3 pb-5 px-5">
        {categories.map(({ id, title }) => (
          <li
            key={id}
            className="col-span-3 odd:text-purple-200 even:text-lime-200"
          >
            <StatCard
              type={StatCardType.Dark}
              label={title}
              counter={counts[id] || 0}
            />
          </li>
        ))}
      </ul>
    </DashboardCard>
  );
};

export default Page;

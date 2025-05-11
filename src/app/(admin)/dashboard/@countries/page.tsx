import Image from 'next/image.js';
import DashboardCard from '../../../components/DashboardCard';
import clsx from 'clsx';
import { getCompanies, getCountries } from '../../../../lib/api';
import getCountById from '../../../../lib/utils/getCountById';

const Page = async () => {
  const countries = await getCountries();
  const companies = await getCompanies();

  const counts = getCountById(companies, 'countryId');

  return (
    <>
      <DashboardCard label={'Countries of Companies'}>
        <div className="flex items-end justify-between pb-5 px-5 gap-2">
          <ul>
            {countries.map(({ id, title }) => (
              <li
                key={id}
                className={clsx(
                  'text-sm text-gray-900 font-medium',
                  'before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200',
                )}
              >{`${title} - ${counts[id] || 0}`}</li>
            ))}
          </ul>
          <Image width={395} height={262} src="/images/world.svg" alt="world" />
        </div>
      </DashboardCard>
    </>
  );
};

export default Page;

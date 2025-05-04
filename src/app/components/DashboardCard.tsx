import { FC, ReactNode } from 'react';

export interface DashboardCardProps {
  label: ReactNode;
  children: ReactNode;
}
const DashboardCard: FC<DashboardCardProps> = ({ label, children }) => {
  return (
    <div className="rounded bg-gray-100 w-full h-full">
      <p className="p-5 text-xl	text-gray-900 font-medium">{label}</p>
      <>{children}</>
    </div>
  );
};

export default DashboardCard;

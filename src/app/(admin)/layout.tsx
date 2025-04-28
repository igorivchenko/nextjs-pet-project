import { FC, ReactNode } from 'react';
import Sidebar from '../components/Sidebar';

export interface layoutProps {
  children: ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
};

export default layout;

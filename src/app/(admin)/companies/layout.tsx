import { FC, ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
  header: ReactNode;
  toolbar: ReactNode;
  modal: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children, header, toolbar, modal }) => {
  return (
    <>
      {modal}
      {header}
      <main>
        {toolbar}
        {children}
      </main>
    </>
  );
};

export default Layout;

import React, { FC } from 'react';

export interface LayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
  toolbar: React.ReactNode;
  modal: React.ReactNode;
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

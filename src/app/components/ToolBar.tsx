import { FC, ReactNode } from 'react';

export interface ToolbarProps {
  children: ReactNode;
  action?: ReactNode;
}

const Toolbar: FC<ToolbarProps> = ({ children, action }) => {
  return (
    <div className="flex items-center gap-7 py-8 px-10">
      <div className="flex-1">{children}</div>
      {action}
    </div>
  );
};

export default Toolbar;

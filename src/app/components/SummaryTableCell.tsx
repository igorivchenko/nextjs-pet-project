import React, { FC } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

export interface SummaryTableCellProps {
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
  company?: boolean;
}

const SummaryTableCell: FC<SummaryTableCellProps> = ({
  align = 'left',
  company = false,
  children,
}) => {
  return (
    <td
      className={clsx(
        company && 'flex items-center gap-2',
        'py-2 px-5 text-sm border-gray-100 border-r first-of-type:border-l',
        `text-${align}`,
      )}
    >
      {company && (
        <Image
          width={16}
          height={16}
          src="/images/label.png"
          alt="label country"
        />
      )}
      {children}
    </td>
  );
};

export default SummaryTableCell;

'use client';

import clsx from 'clsx';
import React, { ButtonHTMLAttributes, FC } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ disabled, ...rest }) => {
  return (
    <button
      {...rest}
      className={clsx(
        'py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded',
        disabled ? 'text-zinc-100' : 'hover:bg-gray-800 active:bg-gray-900',
      )}
    />
  );
};

export default Button;

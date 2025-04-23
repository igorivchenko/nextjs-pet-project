'use client';

import { Field } from 'formik';
import { FC, InputHTMLAttributes } from 'react';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputField: FC<InputFieldProps> = ({ label, id, ...rest }) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
        {...rest}
        id={id}
      />
    </div>
  );
};

export default InputField;

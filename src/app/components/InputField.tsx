import { FC } from 'react';

export interface InputFieldProps {
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
    </div>
  );
};

export default InputField;

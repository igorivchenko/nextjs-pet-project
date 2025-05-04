'use client';
import { FC } from 'react';
import Button from '../../components/Button';

interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}

const ErrorComponent: FC<ErrorComponentProps> = ({ error, reset }) => {
  return (
    <div>
      <p>{`Something went wrong! ${error.message}`}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
};

export default ErrorComponent;

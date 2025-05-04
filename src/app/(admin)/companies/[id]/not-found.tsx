import Link from 'next/link.js';

const NotFound = () => {
  return (
    <>
      <p>Could not found company!</p>
      <Link href={'/companies'} className="text-blue-500">
        Back to companies
      </Link>
    </>
  );
};

export default NotFound;

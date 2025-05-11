import { FC } from 'react';
import AddPromotionButton from '../../../../components/AddPromotionButton';
import SearchInput from '../../../../components/SearchInput';
import Toolbar from '../../../../components/ToolBar';

export interface PageProps {
  params: Promise<{ id: string }>;
}

const Page: FC<PageProps> = async ({ params }) => {
  const { id } = await params;

  return (
    <Toolbar action={<AddPromotionButton companyId={id} />}>
      <SearchInput />
    </Toolbar>
  );
};

export default Page;

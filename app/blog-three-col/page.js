import MainLayout from '@/components/layout/MainLayout';
import PageBanner from '@/components/common/PageBanner';
import News from '@/components/Home/News';

export const metadata = {
  title: 'Blog Three Columns | Medicoz',
  description: 'Read our latest health and medical blog posts',
};

export default function BlogThreeColPage() {
  return (
    <MainLayout>
      <PageBanner title="Blog Three Columns" breadcrumb={['Home', 'Blog', 'Three Columns']} />
      <News />
    </MainLayout>
  );
}

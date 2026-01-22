import MainLayout from '@/components/layout/MainLayout';
import PageBanner from '@/components/common/PageBanner';
import News from '@/components/Home/News';

export const metadata = {
  title: 'Blog Two Columns | Medicoz',
  description: 'Read our latest health and medical blog posts',
};

export default function BlogTwoColPage() {
  return (
    <MainLayout>
      <PageBanner title="Blog Two Columns" breadcrumb={['Home', 'Blog', 'Two Columns']} />
      <News />
    </MainLayout>
  );
}

import PageBanner from '@/components/common/PageBanner';
import News from '@/components/Home/News';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'Blog Four Columns Wide | Medicoz',
  description: 'Read our latest health and medical blog posts',
};

export default function BlogFourColWidePage() {
  return (
    <MainLayout>
      <PageBanner title="Blog Four Columns" breadcrumb={['Home', 'Blog', 'Four Columns']} />
      <News />
    </MainLayout>
  );
}

import MainLayout from '@/components/layout/MainLayout';
import PageBanner from '@/components/common/PageBanner';
import News from '@/components/Home/News';

export const metadata = {
  title: 'Blog Standard | Medicoz',
  description: 'Read our latest health and medical blog posts',
};

export default function BlogStandardPage() {
  return (
    <MainLayout>
      <PageBanner title="Blog Standard" breadcrumb={['Home', 'Blog', 'Standard']} />
      <News />
    </MainLayout>
  );
}

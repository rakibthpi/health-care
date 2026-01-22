import PageBanner from '@/components/common/PageBanner';
import News from '@/components/Home/News';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'Blog Checkerboard | Medicoz',
  description: 'Read our latest health and medical blog posts',
};

export default function BlogCheckboardPage() {
  return (
    <MainLayout>
      <PageBanner title="Blog Checkerboard" breadcrumb={['Home', 'Blog', 'Checkerboard']} />
      <News />
    </MainLayout>
  );
}

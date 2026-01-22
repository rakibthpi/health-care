import PageBanner from '@/components/common/PageBanner';
import News from '@/components/Home/News';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'Blog Masonry | Medicoz',
  description: 'Read our latest health and medical blog posts',
};

export default function BlogMasonryPage() {
  return (
    <MainLayout>
      <PageBanner title="Blog Masonry" breadcrumb={['Home', 'Blog', 'Masonry']} />
      <News />
    </MainLayout>
  );
}

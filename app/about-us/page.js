import PageBanner from '@/components/common/PageBanner';
import About from '@/components/Home/About';
import Clients from '@/components/Home/Clients';
import Features from '@/components/Home/Features';
import Team from '@/components/Home/Team';
import Testimonial from '@/components/Home/Testimonial';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'About Us | Medicoz',
  description: 'Learn more about our medical center and our mission',
};

export default function AboutUsPage() {
  return (
    <MainLayout>
      <PageBanner title="About Us" breadcrumb={['Home', 'About Us']} />
      <About />
      <Features />
      <Team />
      <Testimonial />
      <Clients />
    </MainLayout>
  );
}

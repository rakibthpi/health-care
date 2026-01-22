import MainLayout from '@/components/layout/MainLayout';
import PageBanner from '@/components/common/PageBanner';
import Services from '@/components/Home/Services';
import Features from '@/components/Home/Features';
import Appointment from '@/components/Home/Appointment';
import Clients from '@/components/Home/Clients';

export const metadata = {
  title: 'Services | Medicoz',
  description: 'Explore our comprehensive medical services',
};

export default function ServicesPage() {
  return (
    <MainLayout>
      <PageBanner title="Our Services" breadcrumb={['Home', 'Services']} />
      <Services />
      <Features />
      <Appointment />
      <Clients />
    </MainLayout>
  );
}

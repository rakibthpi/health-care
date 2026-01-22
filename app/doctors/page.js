import PageBanner from '@/components/common/PageBanner';
import Clients from '@/components/Home/Clients';
import Team from '@/components/Home/Team';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'Our Doctors | Medicoz',
  description: 'Meet our experienced medical professionals',
};

export default function DoctorsPage() {
  return (
    <MainLayout>
      <PageBanner title="Our Doctors" breadcrumb={['Home', 'Doctors']} />
      <Team />
      <Clients />
    </MainLayout>
  );
}

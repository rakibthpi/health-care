import MainLayout from '@/components/layout/MainLayout';
import PageBanner from '@/components/common/PageBanner';
import Services from '@/components/Home/Services';
import Clients from '@/components/Home/Clients';

export const metadata = {
  title: 'Departments | Medicoz',
  description: 'Explore our medical departments',
};

export default function DepartmentsPage() {
  return (
    <MainLayout>
      <PageBanner title="Our Departments" breadcrumb={['Home', 'Departments']} />
      <Services />
      <Clients />
    </MainLayout>
  );
}

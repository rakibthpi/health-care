import MainLayout from '@/components/layout/MainLayout';
import PageBanner from '@/components/common/PageBanner';
import Pricing from '@/components/Home/Pricing';
import Clients from '@/components/Home/Clients';

export const metadata = {
  title: 'Pricing Table | Medicoz',
  description: 'View our service pricing and plans',
};

export default function PricingTablePage() {
  return (
    <MainLayout>
      <PageBanner title="Pricing Table" breadcrumb={['Home', 'Pricing Table']} />
      <Pricing />
      <Clients />
    </MainLayout>
  );
}

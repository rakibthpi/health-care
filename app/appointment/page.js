import PageBanner from '@/components/common/PageBanner';
import Appointment from '@/components/Home/Appointment';
import Clients from '@/components/Home/Clients';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'Appointment | Medicoz',
  description: 'Book an appointment with our doctors',
};

export default function AppointmentPage() {
  return (
    <MainLayout>
      <PageBanner title="Book Appointment" breadcrumb={['Home', 'Appointment']} />
      <Appointment />
      <Clients />
    </MainLayout>
  );
}

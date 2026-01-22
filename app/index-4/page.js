import About from '@/components/Home/About';
import Appointment from '@/components/Home/Appointment';
import Clients from '@/components/Home/Clients';
import Features from '@/components/Home/Features';
import Hero from '@/components/Home/Hero';
import News from '@/components/Home/News';
import Pricing from '@/components/Home/Pricing';
import Services from '@/components/Home/Services';
import Team from '@/components/Home/Team';
import Testimonial from '@/components/Home/Testimonial';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'Home Eye Care | Medicoz',
  description: 'Welcome to our Eye Care Center',
};

export default function HomeEyeCare() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <About />
      <Services />
      <Team />
      <Appointment />
      <Testimonial />
      <Pricing />
      <News />
      <Clients />
    </MainLayout>
  );
}

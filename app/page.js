import About from '@/components/About';
import Appointment from '@/components/Appointment';
import Clients from '@/components/Clients';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import MainHeader from '@/components/MainHeader';
import News from '@/components/News';
import Pricing from '@/components/Pricing';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Testimonial from '@/components/Testimonial';

export default function Home() {
  return (
    <>
      <MainHeader />
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
      <Footer />
    </>
  );
}

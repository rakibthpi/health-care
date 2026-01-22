import MainHeader from '@/components/MainHeader';
import Footer from '@/components/Footer';

export default function MainLayout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
      <Footer />
    </>
  );
}

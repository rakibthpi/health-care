import MainLayout from '@/components/layout/MainLayout';
import PageBanner from '@/components/common/PageBanner';

export const metadata = {
  title: 'Terms and Conditions | Medicoz',
  description: 'Read our terms and conditions',
};

export default function TermsAndConditionPage() {
  return (
    <MainLayout>
      <PageBanner title="Terms and Conditions" breadcrumb={['Home', 'Terms and Conditions']} />
      <section className="terms-section">
        <div className="auto-container">
          <div className="content-box">
            <h3>1. Introduction</h3>
            <p>
              Welcome to Medicoz. These terms and conditions outline the rules and regulations for
              the use of our website and services. By accessing this website, we assume you accept
              these terms and conditions in full.
            </p>

            <h3>2. Medical Disclaimer</h3>
            <p>
              The information provided on this website is for general informational purposes only
              and should not be considered as medical advice. Always seek the advice of your
              physician or other qualified health provider with any questions you may have.
            </p>

            <h3>3. Privacy Policy</h3>
            <p>
              Your privacy is important to us. All information collected through our website is
              handled in accordance with our Privacy Policy. We are committed to protecting your
              personal health information.
            </p>

            <h3>4. Appointment Booking</h3>
            <p>
              When booking an appointment through our website, you agree to provide accurate and
              complete information. We reserve the right to cancel appointments if inaccurate
              information is provided.
            </p>

            <h3>5. Changes to Terms</h3>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective
              immediately upon posting on the website. Your continued use of our services
              constitutes acceptance of any changes.
            </p>

            <h3>6. Contact Us</h3>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at
              info@medicoz.com or call us at +898 68679 575.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

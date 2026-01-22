import MainLayout from '@/components/layout/MainLayout';
import PageBanner from '@/components/common/PageBanner';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Doctor Detail | Medicoz',
  description: 'Learn more about our doctor',
};

export default function DoctorDetailPage() {
  return (
    <MainLayout>
      <PageBanner title="Doctor Detail" breadcrumb={['Home', 'Doctors', 'Doctor Detail']} />
      <section className="doctor-detail-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="doctor-image">
                <Image
                  src="/images/resource/team-1.jpg"
                  alt="Doctor"
                  width={400}
                  height={500}
                  style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="doctor-info">
                <h2>Dr. Morila Wood</h2>
                <span className="designation" style={{ color: '#00a6fb', fontSize: '18px' }}>
                  Senior Doctor at Delmont
                </span>

                <div className="bio mt-4">
                  <h4>Biography</h4>
                  <p>
                    Dr. Morila Wood is a highly experienced medical professional with over 15 years
                    of experience in the healthcare industry. She specializes in cardiology and has
                    helped thousands of patients achieve better health outcomes.
                  </p>
                  <p>
                    Her dedication to patient care and commitment to staying updated with the latest
                    medical advancements makes her one of the most sought-after doctors in the
                    region.
                  </p>
                </div>

                <div className="qualifications mt-4">
                  <h4>Qualifications</h4>
                  <ul>
                    <li>MBBS from Harvard Medical School</li>
                    <li>MD in Cardiology</li>
                    <li>Fellowship in Interventional Cardiology</li>
                    <li>15+ Years of Experience</li>
                  </ul>
                </div>

                <div className="contact-info mt-4">
                  <h4>Contact Information</h4>
                  <p>
                    <strong>Phone:</strong> +898 68679 575
                  </p>
                  <p>
                    <strong>Email:</strong> dr.morila@medicoz.com
                  </p>
                </div>

                <div className="btn-box mt-4">
                  <Link href="/appointment" className="theme-btn btn-style-one">
                    <span className="btn-title">Book Appointment</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

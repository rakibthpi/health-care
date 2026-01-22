import MainLayout from '@/components/layout/MainLayout';
import PageBanner from '@/components/common/PageBanner';
import Image from 'next/image';
import Appointment from '@/components/Home/Appointment';

export const metadata = {
  title: 'Department Detail | Medicoz',
  description: 'Learn more about our department',
};

export default function DepartmentDetailPage() {
  return (
    <MainLayout>
      <PageBanner title="Department Detail" breadcrumb={['Home', 'Departments', 'Cardiology']} />
      <section className="department-detail-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="department-content">
                <div className="image-box mb-4">
                  <Image
                    src="/images/resource/image-1.png"
                    alt="Department"
                    width={800}
                    height={400}
                    style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                  />
                </div>

                <h2>Cardiology Department</h2>
                <p>
                  Our Cardiology Department is equipped with state-of-the-art technology and staffed
                  by highly experienced cardiologists. We provide comprehensive cardiovascular care,
                  from prevention and diagnosis to treatment and rehabilitation.
                </p>

                <h4>Our Services</h4>
                <ul>
                  <li>ECG and Stress Testing</li>
                  <li>Echocardiography</li>
                  <li>Cardiac Catheterization</li>
                  <li>Pacemaker Implantation</li>
                  <li>Heart Failure Management</li>
                  <li>Preventive Cardiology</li>
                </ul>

                <h4>Why Choose Us?</h4>
                <p>
                  With over 30 years of experience and a team of board-certified cardiologists, we
                  are committed to providing the highest quality cardiac care. Our multidisciplinary
                  approach ensures that each patient receives personalized treatment tailored to
                  their specific needs.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="sidebar">
                <div className="sidebar-widget">
                  <h4>All Departments</h4>
                  <ul className="department-list">
                    <li>
                      <a href="/department-detail">Cardiology</a>
                    </li>
                    <li>
                      <a href="/department-detail">Neurology</a>
                    </li>
                    <li>
                      <a href="/department-detail">Urology</a>
                    </li>
                    <li>
                      <a href="/department-detail">Gynecological</a>
                    </li>
                    <li>
                      <a href="/department-detail">Pediatrical</a>
                    </li>
                    <li>
                      <a href="/department-detail">Laboratory</a>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget contact-widget mt-4">
                  <h4>Contact</h4>
                  <p>
                    <strong>Phone:</strong> +898 68679 575
                  </p>
                  <p>
                    <strong>Email:</strong> cardiology@medicoz.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Appointment />
    </MainLayout>
  );
}

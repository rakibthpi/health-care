import MainLayout from '@/components/layout/MainLayout';
import PageBanner from '@/components/common/PageBanner';
import Clients from '@/components/Home/Clients';

export const metadata = {
  title: 'Contact Us | Medicoz',
  description: 'Get in touch with us',
};

export default function ContactPage() {
  return (
    <MainLayout>
      <PageBanner title="Contact Us" breadcrumb={['Home', 'Contact']} />
      <section className="contact-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="contact-form">
                <div className="sec-title">
                  <span className="sub-title">GET IN TOUCH</span>
                  <h2 className="text-reveal-anim">Send Us a Message</h2>
                  <span className="divider"></span>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input type="tel" className="form-control" placeholder="Phone Number" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input type="text" className="form-control" placeholder="Subject" />
                    </div>
                    <div className="col-12 mb-3">
                      <textarea
                        className="form-control"
                        rows={6}
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="theme-btn btn-style-one">
                        <span className="btn-title">Send Message</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="contact-info-box">
                <h3>Contact Information</h3>
                <ul className="contact-list">
                  <li>
                    <span
                      className="icon fas fa-map-marker-alt"
                      style={{ color: '#00a6fb', marginRight: '15px' }}
                    ></span>
                    <div>
                      <strong>Address:</strong>
                      <p>
                        2130 Fulton Street
                        <br />
                        San Diego, CA 94117-1080 USA
                      </p>
                    </div>
                  </li>
                  <li className="mt-4">
                    <span
                      className="icon fas fa-phone"
                      style={{ color: '#00a6fb', marginRight: '15px' }}
                    ></span>
                    <div>
                      <strong>Phone:</strong>
                      <p>
                        <a href="tel:+89868679575">+898 68679 575</a>
                      </p>
                    </div>
                  </li>
                  <li className="mt-4">
                    <span
                      className="icon fas fa-envelope"
                      style={{ color: '#00a6fb', marginRight: '15px' }}
                    ></span>
                    <div>
                      <strong>Email:</strong>
                      <p>
                        <a href="mailto:info@medicoz.com">info@medicoz.com</a>
                      </p>
                    </div>
                  </li>
                  <li className="mt-4">
                    <span
                      className="icon fas fa-clock"
                      style={{ color: '#00a6fb', marginRight: '15px' }}
                    ></span>
                    <div>
                      <strong>Working Hours:</strong>
                      <p>
                        Mon - Sat: 8:00 AM - 6:00 PM
                        <br />
                        Sunday: CLOSED
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="auto-container">
          <div
            className="map-box"
            style={{
              height: '400px',
              backgroundColor: '#f5f5f5',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <p style={{ color: '#666' }}>Map will be displayed here</p>
          </div>
        </div>
      </section>

      <Clients />
    </MainLayout>
  );
}

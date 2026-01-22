import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="main-footer">
      {/* Widgets Section */}
      <div className="widgets-section" style={{ backgroundImage: 'url(images/background/7.jpg)' }}>
        <div className="auto-container">
          <div className="row">
            {/* Big Column */}
            <div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="row">
                {/* Footer Column */}
                <div className="footer-column col-xl-7 col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget about-widget">
                    <div className="logo">
                      <Link href="/">
                        <Image
                          src="/images/logo-2.png"
                          alt=""
                          width={200}
                          height={50}
                          style={{ height: 'auto' }}
                        />
                      </Link>
                    </div>
                    <div className="text">
                      <p>
                        Our Clinic has grown to provide a world class facility for the clinic
                        advanced restorative.
                      </p>
                      <p>
                        We are among the most qualified implant providers in the AUS with over 30
                        years of quality training and experience.
                      </p>
                    </div>
                    <ul className="social-icon-three">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-skype"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Footer Column */}
                <div className="footer-column col-xl-5 col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget">
                    <h2 className="widget-title">Departments</h2>
                    <ul className="user-links">
                      <li>
                        <a href="#">Surgery & Radiology</a>
                      </li>
                      <li>
                        <a href="#">Family Medicine</a>
                      </li>
                      <li>
                        <a href="#">Women’s Health</a>
                      </li>
                      <li>
                        <a href="#">Optician</a>
                      </li>
                      <li>
                        <a href="#">Pediatrics</a>
                      </li>
                      <li>
                        <a href="#">Dermatology</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Big Column */}
            <div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="row">
                {/* Footer Column */}
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget recent-posts">
                    <h2 className="widget-title">Latest News</h2>
                    <div className="widget-content">
                      <div className="post">
                        <div className="thumb">
                          <Link href="/blog-post-image">
                            <Image
                              src="/images/resource/post-thumb-1.jpg"
                              alt=""
                              width={80}
                              height={80}
                            />
                          </Link>
                        </div>
                        <h4>
                          <Link href="/blog-post-image">
                            Integrative Medicine
                            <br />& Cancer Treatment.
                          </Link>
                        </h4>
                        <span className="date">July 11, 2020</span>
                      </div>

                      <div className="post">
                        <div className="thumb">
                          <Link href="/blog-post-image">
                            <Image
                              src="/images/resource/post-thumb-2.jpg"
                              alt=""
                              width={80}
                              height={80}
                            />
                          </Link>
                        </div>
                        <h4>
                          <Link href="/blog-post-image">
                            Achieving Better
                            <br />
                            Health Care Time.
                          </Link>
                        </h4>
                        <span className="date">August 1, 2020</span>
                      </div>

                      <div className="post">
                        <div className="thumb">
                          <Link href="/blog-post-image">
                            <Image
                              src="/images/resource/post-thumb-3.jpg"
                              alt=""
                              width={80}
                              height={80}
                            />
                          </Link>
                        </div>
                        <h4>
                          <Link href="/blog-post-image">
                            Great Health Care
                            <br />
                            For Patients.
                          </Link>
                        </h4>
                        <span className="date">August 1, 2020</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Column */}
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget contact-widget">
                    <h2 className="widget-title">Contact Us</h2>
                    <div className="widget-content">
                      <ul className="contact-list">
                        <li>
                          <span className="icon fas fa-location-dot"></span>
                          <div className="text">
                            2130 Fulton Street San Diego
                            <br />
                            CA 94117-1080 USA
                          </div>
                        </li>

                        <li>
                          <span className="icon fas fa-phone"></span>
                          <div className="text">Mon to Fri : 08:30 - 18:00</div>
                          <a href="tel:+89868679575">
                            <strong>+898 68679 575</strong>
                          </a>
                        </li>

                        <li>
                          <span className="icon fas fa-envelope"></span>
                          <div className="text">
                            Do you have a Question?
                            <br />
                            <a href="mailto:info@gmail.com">
                              <strong>info@gmail.com</strong>
                            </a>
                          </div>
                        </li>

                        <li>
                          <span className="icon fas fa-clock"></span>
                          <div className="text">
                            Mon - Sat 8.00 - 18.00
                            <br />
                            <strong>Sunday CLOSED</strong>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        {/* Scroll To Top */}
        <div className="scroll-to-top scroll-to-target" data-target="html">
          <span className="fas fa-angle-up"></span>
        </div>

        <div className="auto-container">
          <div className="inner-container clearfix">
            <div className="footer-nav">
              <ul className="clearfix">
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/supplier">Supplier</Link>
                </li>
              </ul>
            </div>

            <div className="copyright-text">
              <p>
                Copyright © 2025
                <a href="#">Bold Touch</a>
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

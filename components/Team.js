import Image from 'next/image';
import Link from 'next/link';

export default function Team() {
  return (
    <section className="team-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="sub-title">Our Doctor</span>
          <h2 className="text-reveal-anim">Our Dedicated Doctors Team</h2>
          <span className="divider"></span>
        </div>

        <div className="row">
          {/* Team Block */}
          <div className="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
            <div className="inner-box">
              <figure className="image">
                <Image
                  src="/images/resource/team-1.jpg"
                  alt="Doctor"
                  width={300}
                  height={300}
                  style={{ width: '100%', height: 'auto' }}
                />
              </figure>
              <ul className="social-links">
                <li>
                  <a href="#">
                    <span className="fab fa-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-linkedin-in"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-pinterest"></span>
                  </a>
                </li>
              </ul>
              <div className="info-box">
                <h4 className="name">
                  <Link href="/doctor-detail">Dr. Morila Wood</Link>
                </h4>
                <span className="designation">Senior Dr. at Delmont</span>
              </div>
            </div>
          </div>

          {/* Team Block */}
          <div className="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
            <div className="inner-box">
              <figure className="image">
                <Image
                  src="/images/resource/team-2.jpg"
                  alt="Doctor"
                  width={300}
                  height={300}
                  style={{ width: '100%', height: 'auto' }}
                />
              </figure>
              <ul className="social-links">
                <li>
                  <a href="#">
                    <span className="fab fa-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-linkedin-in"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-pinterest"></span>
                  </a>
                </li>
              </ul>
              <div className="info-box">
                <h4 className="name">
                  <Link href="/doctor-detail">Dr. Morila Wood</Link>
                </h4>
                <span className="designation">Senior Dr. at Delmont</span>
              </div>
            </div>
          </div>

          {/* Team Block */}
          <div className="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
            <div className="inner-box">
              <figure className="image">
                <Image
                  src="/images/resource/team-3.jpg"
                  alt="Doctor"
                  width={300}
                  height={300}
                  style={{ width: '100%', height: 'auto' }}
                />
              </figure>
              <ul className="social-links">
                <li>
                  <a href="#">
                    <span className="fab fa-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-linkedin-in"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-pinterest"></span>
                  </a>
                </li>
              </ul>
              <div className="info-box">
                <h4 className="name">
                  <Link href="/doctor-detail">Dr. Morila Wood</Link>
                </h4>
                <span className="designation">Senior Dr. at Delmont</span>
              </div>
            </div>
          </div>

          {/* Team Block */}
          <div className="team-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
            <div className="inner-box">
              <figure className="image">
                <Image
                  src="/images/resource/team-4.jpg"
                  alt="Doctor"
                  width={300}
                  height={300}
                  style={{ width: '100%', height: 'auto' }}
                />
              </figure>
              <ul className="social-links">
                <li>
                  <a href="#">
                    <span className="fab fa-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-linkedin-in"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-pinterest"></span>
                  </a>
                </li>
              </ul>
              <div className="info-box">
                <h4 className="name">
                  <Link href="/doctor-detail">Dr. Morila Wood</Link>
                </h4>
                <span className="designation">Senior Dr. at Delmont</span>
              </div>
            </div>
          </div>
        </div>

        <div className="sec-bottom-text">
          Don’t hesitate, contact us for better help and services
          <a href="#">Explore all Dr. Team</a>
        </div>
      </div>
    </section>
  );
}

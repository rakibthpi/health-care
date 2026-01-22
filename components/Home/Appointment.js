export default function Appointment() {
  return (
    <section className="appointment-section">
      <div
        className="image-layer"
        style={{ backgroundImage: 'url(images/background/banner.jpg)' }}
      ></div>
      <div className="auto-container">
        <div className="row">
          {/* Content Column */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <span className="title">Need a Doctor for Check-up?</span>
              <h2 className="text-reveal-anim">
                Just Make an Appointment
                <br />
                and You’re Done!
              </h2>
              <div className="number">
                Get Your Quote or Call:
                <strong>(0080) 123-453-789</strong>
              </div>
              <a href="#" className="theme-btn btn-style-three">
                <span className="btn-title">Get an Appointment</span>
              </a>
            </div>
          </div>
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <figure className="image">
              <img src="images/resource/image-4.png" alt="" />
            </figure>
          </div>
        </div>

        <div className="fun-fact-section">
          <div className="row">
            {/* Column */}
            <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
              <div className="count-box">
                <div className="icon-box">
                  <span className="icon fas fa-medal"></span>
                </div>
                <h4 className="counter-title">Years of Experience</h4>
                <span className="count-text" data-speed="3000" data-stop="25">
                  0
                </span>
              </div>
            </div>

            {/* Column */}
            <div
              className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="count-box">
                <div className="icon-box">
                  <span className="icon fas fa-user-group"></span>
                </div>
                <h4 className="counter-title">Medical Spesialities</h4>
                <span className="count-text" data-speed="3000" data-stop="470">
                  0
                </span>
              </div>
            </div>

            {/* Column */}
            <div
              className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="800ms"
            >
              <div className="count-box">
                <div className="icon-box">
                  <span className="icon fas fa-hospital"></span>
                </div>
                <h4 className="counter-title">Medical Spesialities</h4>
                <span className="count-text" data-speed="3000" data-stop="689">
                  0
                </span>
              </div>
            </div>

            {/* Column */}
            <div
              className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="1200ms"
            >
              <div className="count-box">
                <div className="icon-box">
                  <span className="icon fas fa-face-smile"></span>
                </div>
                <h4 className="counter-title">Happy Patients</h4>
                <span className="count-text" data-speed="3000" data-stop="9036">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

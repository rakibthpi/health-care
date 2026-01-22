export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="sub-title">Our Pricing</span>
          <h2 className="text-reveal-anim">Pricing Plan</h2>
          <span className="divider"></span>
        </div>

        <div className="outer-box">
          <div className="row">
            {/* Pricing Block */}
            <div className="pricing-block col-lg-3 col-md-6 col-sm-12">
              <div class="inner-box">
                <div className="price-box">
                  <h4 className="price">$299</h4>
                  <div className="validaty">Per Month</div>
                </div>
                <h3 className="title">Cardiology</h3>
                <ul className="features">
                  <li>Functional Diagnotics</li>
                  <li>Allergens Drugs</li>
                  <li>Pollen Allergens</li>
                  <li>Food Allergens</li>
                </ul>
                <div className="btn-box">
                  <a href="#" className="theme-btn">
                    Get Offer
                  </a>
                </div>
              </div>
            </div>

            {/* Pricing Block */}
            <div className="pricing-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="price-box">
                  <h4 className="price">$120</h4>
                  <div className="validaty">Per Month</div>
                </div>
                <h3 className="title">Detal Care</h3>
                <ul className="features">
                  <li>Tooth implantation</li>
                  <li>Lase Dentistry</li>
                  <li>Tests and Treatment</li>
                  <li>Medical Consultation</li>
                </ul>
                <div className="btn-box">
                  <a href="#" className="theme-btn">
                    Get Offer
                  </a>
                </div>
              </div>
            </div>

            {/* Pricing Block */}
            <div className="pricing-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="price-box">
                  <h4 className="price">$150</h4>
                  <div className="validaty">Per Month</div>
                </div>
                <h3 className="title">Body Checkup</h3>
                <ul className="features">
                  <li>Tests and Treatment</li>
                  <li>Tests and Treatment</li>
                  <li>Laboratory Services</li>
                  <li>Food Allergens</li>
                </ul>
                <div className="btn-box">
                  <a href="#" className="theme-btn">
                    Get Offer
                  </a>
                </div>
              </div>
            </div>

            {/* Pricing Block */}
            <div className="pricing-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="price-box">
                  <h4 className="price">$100</h4>
                  <div className="validaty">Per Month</div>
                </div>
                <h3 className="title">Blood Test</h3>
                <ul className="features">
                  <li>Blood Test Service</li>
                  <li>Safety Training Tips</li>
                  <li>Tests and Treatment</li>
                  <li>Food Allergens</li>
                </ul>
                <div className="btn-box">
                  <a href="#" className="theme-btn">
                    Get Offer
                  </a>
                </div>
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

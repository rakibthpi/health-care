export default function About() {
  return (
    <section className="about-section">
      <div className="auto-container">
        <div className="row">
          {/* Content Column */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-lg-2">
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">OUR MEDICAL</span>
                <h2 className="text-reveal-anim">
                  We&apos;re setting Standards in
                  <br />
                  Research what&apos;s more,
                  <br />
                  Clinical Care.
                </h2>
                <span className="divider"></span>
                <p>
                  We provide the most full medical services, so every person could have the
                  opportunity to receive qualitative medical help.
                </p>
                <p>
                  Our Clinic has grown to provide a world class facility for the treatment of tooth
                  loss, dental cosmetics and bore advanced restorative dentistry. We are among the
                  most qualified implant providers in the AUS with over 30 years of quality training
                  and experience.
                </p>
              </div>
              <div className="link-box">
                <figure className="signature">
                  <img src="images/resource/signature.png" alt="" />
                </figure>
                <a href="#" className="theme-btn btn-style-one">
                  <span className="btn-title">More About</span>
                </a>
              </div>
            </div>
          </div>

          {/* Images Column */}
          <div className="images-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="video-link">
                <a
                  href="https://www.youtube.com/watch?v=4UvS3k8D4rs"
                  className="play-btn lightbox-image"
                  data-fancybox="images"
                >
                  <span className="fas fa-play"></span>
                </a>
              </div>
              <figure className="image-1">
                <img src="images/resource/image-1.png" alt="" />
              </figure>
              <figure className="image-2">
                <img src="images/resource/image-2.png" alt="" />
              </figure>
              <figure className="image-3">
                <span className="hex"></span>
                <img src="images/resource/image-3.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

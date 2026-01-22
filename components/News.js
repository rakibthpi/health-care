import Image from 'next/image';
import Link from 'next/link';

export default function News() {
  return (
    <section className="news-section">
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title text-center">
          <span className="title">OUR BLOG</span>
          <h2 className="text-reveal-anim">Recent Articles and News</h2>
          <span className="divider"></span>
        </div>

        <div className="row">
          {/* News Block */}
          <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <Link href="/blog-post-image">
                    <Image
                      src="/images/resource/news-1.jpg"
                      alt=""
                      width={370}
                      height={250}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </Link>
                </figure>
                <a href="#" className="date">
                  Sep 19, 2020
                </a>
              </div>
              <div className="lower-content">
                <h4>
                  <Link href="/blog-post-image">
                    What is The Success rate
                    <br />
                    of a root canel?
                  </Link>
                </h4>
                <div className="text">
                  Nullam mauris vitae tortor sodales efficitur. Quisque orci ante. Proin amet turpis
                </div>
                <div className="post-info">
                  <div className="post-author">By Admin Rose</div>
                  <ul className="post-option">
                    <li>
                      <a href="#">
                        0<i className="far fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        0<i className="far fa-comments"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* News Block */}
          <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <Link href="/blog-post-image">
                    <Image
                      src="/images/resource/news-2.jpg"
                      alt=""
                      width={370}
                      height={250}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </Link>
                </figure>
                <a href="#" className="date">
                  Sep 19, 2020
                </a>
              </div>
              <div className="lower-content">
                <h4>
                  <Link href="/blog-post-image">
                    How to handle your kids’
                    <br />
                    mystery ailments?
                  </Link>
                </h4>
                <div className="text">
                  Nullam mauris vitae tortor sodales efficitur. Quisque orci ante. Proin amet turpis
                </div>
                <div className="post-info">
                  <div className="post-author">By Admin Rose</div>
                  <ul className="post-option">
                    <li>
                      <a href="#">
                        0<i className="far fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        0<i className="far fa-comments"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* News Block */}
          <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <Link href="/blog-post-image">
                    <Image
                      src="/images/resource/news-3.jpg"
                      alt=""
                      width={370}
                      height={250}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </Link>
                </figure>
                <a href="#" className="date">
                  Sep 19, 2020
                </a>
              </div>
              <div className="lower-content">
                <h4>
                  <Link href="/blog-post-image">
                    How to help the cardiology
                    <br />
                    department
                  </Link>
                </h4>
                <div className="text">
                  Nullam mauris vitae tortor sodales efficitur. Quisque orci ante. Proin amet turpis
                </div>
                <div className="post-info">
                  <div className="post-author">By Admin Rose</div>
                  <ul className="post-option">
                    <li>
                      <a href="#">
                        0<i className="far fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        0<i className="far fa-comments"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

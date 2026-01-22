import Image from 'next/image';

import PageBanner from '@/components/common/PageBanner';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'Gallery Post | Medicoz',
  description: 'Read our blog post with image gallery',
};

export default function BlogPostGalleryPage() {
  return (
    <MainLayout>
      <PageBanner title="Gallery Post" breadcrumb={['Home', 'Blog', 'Gallery Post']} />
      <section className="blog-post-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-post-content">
                <div className="gallery-box mb-4">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <Image
                        src="/images/resource/news-1.jpg"
                        alt="Gallery 1"
                        width={400}
                        height={300}
                        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <Image
                        src="/images/resource/news-2.jpg"
                        alt="Gallery 2"
                        width={400}
                        height={300}
                        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <Image
                        src="/images/resource/news-3.jpg"
                        alt="Gallery 3"
                        width={400}
                        height={300}
                        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <Image
                        src="/images/resource/image-1.png"
                        alt="Gallery 4"
                        width={400}
                        height={300}
                        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="post-meta mb-3">
                  <span>
                    <i className="far fa-calendar"></i> January 23, 2026
                  </span>
                  <span className="ms-3">
                    <i className="far fa-user"></i> Admin
                  </span>
                </div>
                <h2>Healthcare Facilities Gallery</h2>
                <p>
                  Explore our state-of-the-art medical facilities through this gallery post. Our
                  hospital is equipped with the latest technology and designed for patient comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

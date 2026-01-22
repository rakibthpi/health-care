import Image from 'next/image';

import PageBanner from '@/components/common/PageBanner';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'Gallery | Medicoz',
  description: 'View our hospital gallery and facilities',
};

export default function GalleryPage() {
  const galleryImages = [
    '/images/gallery/1.jpg',
    '/images/gallery/2.jpg',
    '/images/gallery/3.jpg',
    '/images/gallery/4.jpg',
    '/images/gallery/5.jpg',
    '/images/gallery/6.jpg',
  ];

  return (
    <MainLayout>
      <PageBanner title="Gallery" breadcrumb={['Home', 'Gallery']} />
      <section className="gallery-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">OUR GALLERY</span>
            <h2 className="text-reveal-anim">Explore Our Hospital</h2>
            <span className="divider"></span>
          </div>
          <div className="row">
            {galleryImages.map((img, index) => (
              <div key={index} className="gallery-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <figure className="image">
                    <Image
                      src={img}
                      alt={`Gallery image ${index + 1}`}
                      width={400}
                      height={300}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

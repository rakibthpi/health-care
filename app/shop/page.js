import MainLayout from '@/components/layout/MainLayout';
import PageBanner from '@/components/common/PageBanner';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Shop | Medicoz',
  description: 'Browse our medical products and equipment',
};

export default function ShopPage() {
  const products = [
    { id: 1, name: 'First Aid Kit', price: 49.99, image: '/images/resource/news-1.jpg' },
    { id: 2, name: 'Blood Pressure Monitor', price: 79.99, image: '/images/resource/news-2.jpg' },
    { id: 3, name: 'Digital Thermometer', price: 24.99, image: '/images/resource/news-3.jpg' },
    { id: 4, name: 'Pulse Oximeter', price: 39.99, image: '/images/resource/news-1.jpg' },
    {
      id: 5,
      name: 'Medical Face Masks (50pc)',
      price: 19.99,
      image: '/images/resource/news-2.jpg',
    },
    { id: 6, name: 'Hand Sanitizer Pack', price: 14.99, image: '/images/resource/news-3.jpg' },
  ];

  return (
    <MainLayout>
      <PageBanner title="Shop" breadcrumb={['Home', 'Shop']} />
      <section className="shop-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">OUR PRODUCTS</span>
            <h2 className="text-reveal-anim">Medical Supplies</h2>
            <span className="divider"></span>
          </div>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div
                  className="product-card"
                  style={{ border: '1px solid #eee', borderRadius: '10px', overflow: 'hidden' }}
                >
                  <div className="product-image">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  <div className="product-info p-3">
                    <h4>{product.name}</h4>
                    <p
                      className="price"
                      style={{ color: '#00a6fb', fontSize: '20px', fontWeight: 'bold' }}
                    >
                      ${product.price}
                    </p>
                    <Link href="/shop-single" className="theme-btn btn-style-one">
                      <span className="btn-title">View Details</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

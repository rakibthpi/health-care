import MainLayout from '@/components/layout/MainLayout';
import PageBanner from '@/components/common/PageBanner';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Product Details | Medicoz',
  description: 'View product details',
};

export default function ShopSinglePage() {
  return (
    <MainLayout>
      <PageBanner title="Product Details" breadcrumb={['Home', 'Shop', 'Product Details']} />
      <section className="shop-single-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="product-image">
                <Image
                  src="/images/resource/news-1.jpg"
                  alt="Product"
                  width={600}
                  height={500}
                  style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="product-details">
                <h2>First Aid Kit - Professional</h2>
                <p
                  className="price"
                  style={{ color: '#00a6fb', fontSize: '32px', fontWeight: 'bold' }}
                >
                  $49.99
                </p>
                <div className="rating mb-3">
                  <i className="fas fa-star" style={{ color: '#ffc107' }}></i>
                  <i className="fas fa-star" style={{ color: '#ffc107' }}></i>
                  <i className="fas fa-star" style={{ color: '#ffc107' }}></i>
                  <i className="fas fa-star" style={{ color: '#ffc107' }}></i>
                  <i className="fas fa-star-half-alt" style={{ color: '#ffc107' }}></i>
                  <span className="ms-2">(24 Reviews)</span>
                </div>
                <p>
                  Our professional first aid kit contains all the essential medical supplies you
                  need for emergencies. Perfect for home, office, or travel use.
                </p>
                <h4>Features:</h4>
                <ul>
                  <li>100+ medical items included</li>
                  <li>Compact and portable design</li>
                  <li>Durable carrying case</li>
                  <li>Includes instruction manual</li>
                </ul>
                <div className="quantity-box mt-4 d-flex align-items-center gap-3">
                  <label>Quantity:</label>
                  <input
                    type="number"
                    defaultValue={1}
                    min={1}
                    style={{
                      width: '80px',
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                    }}
                  />
                </div>
                <div className="btn-box mt-4">
                  <Link href="/shopping-cart" className="theme-btn btn-style-one">
                    <span className="btn-title">Add to Cart</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

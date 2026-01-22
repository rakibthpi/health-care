import MainLayout from '@/components/layout/MainLayout';
import PageBanner from '@/components/common/PageBanner';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Shopping Cart | Medicoz',
  description: 'View your shopping cart',
};

export default function ShoppingCartPage() {
  return (
    <MainLayout>
      <PageBanner title="Shopping Cart" breadcrumb={['Home', 'Shop', 'Cart']} />
      <section className="cart-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="cart-items">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <Image
                            src="/images/resource/news-1.jpg"
                            alt="Product"
                            width={80}
                            height={80}
                            style={{ borderRadius: '5px' }}
                          />
                          <span>First Aid Kit</span>
                        </div>
                      </td>
                      <td>$49.99</td>
                      <td>
                        <input
                          type="number"
                          defaultValue={1}
                          min={1}
                          style={{
                            width: '60px',
                            padding: '5px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                          }}
                        />
                      </td>
                      <td>$49.99</td>
                      <td>
                        <button className="btn btn-link text-danger">
                          <i className="fas fa-times"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <Image
                            src="/images/resource/news-2.jpg"
                            alt="Product"
                            width={80}
                            height={80}
                            style={{ borderRadius: '5px' }}
                          />
                          <span>Blood Pressure Monitor</span>
                        </div>
                      </td>
                      <td>$79.99</td>
                      <td>
                        <input
                          type="number"
                          defaultValue={1}
                          min={1}
                          style={{
                            width: '60px',
                            padding: '5px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                          }}
                        />
                      </td>
                      <td>$79.99</td>
                      <td>
                        <button className="btn btn-link text-danger">
                          <i className="fas fa-times"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div
                className="cart-summary p-4"
                style={{ border: '1px solid #eee', borderRadius: '10px' }}
              >
                <h4>Cart Summary</h4>
                <hr />
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span>$129.98</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping:</span>
                  <span>$10.00</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <strong>Total:</strong>
                  <strong style={{ color: '#00a6fb' }}>$139.98</strong>
                </div>
                <Link href="/checkout" className="theme-btn btn-style-one w-100 text-center">
                  <span className="btn-title">Proceed to Checkout</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

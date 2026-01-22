import MainLayout from '@/components/layout/MainLayout';
import PageBanner from '@/components/common/PageBanner';

export const metadata = {
  title: 'Checkout | Medicoz',
  description: 'Complete your purchase',
};

export default function CheckoutPage() {
  return (
    <MainLayout>
      <PageBanner title="Checkout" breadcrumb={['Home', 'Shop', 'Checkout']} />
      <section className="checkout-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="checkout-form">
                <h3>Billing Details</h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label>First Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label>Last Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label>Email Address *</label>
                      <input type="email" className="form-control" placeholder="Email" required />
                    </div>
                    <div className="col-12 mb-3">
                      <label>Phone *</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label>Street Address *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Street Address"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label>City *</label>
                      <input type="text" className="form-control" placeholder="City" required />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label>Zip Code *</label>
                      <input type="text" className="form-control" placeholder="Zip Code" required />
                    </div>
                    <div className="col-12 mb-3">
                      <label>Order Notes (optional)</label>
                      <textarea
                        className="form-control"
                        rows={4}
                        placeholder="Notes about your order"
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div
                className="order-summary p-4"
                style={{ border: '1px solid #eee', borderRadius: '10px' }}
              >
                <h4>Your Order</h4>
                <hr />
                <div className="d-flex justify-content-between mb-2">
                  <span>First Aid Kit x 1</span>
                  <span>$49.99</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Blood Pressure Monitor x 1</span>
                  <span>$79.99</span>
                </div>
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
                <h5 className="mt-4">Payment Method</h5>
                <div className="payment-options">
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      id="card"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="card">
                      Credit/Debit Card
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="payment" id="paypal" />
                    <label className="form-check-label" htmlFor="paypal">
                      PayPal
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="radio" name="payment" id="cod" />
                    <label className="form-check-label" htmlFor="cod">
                      Cash on Delivery
                    </label>
                  </div>
                </div>
                <button className="theme-btn btn-style-one w-100">
                  <span className="btn-title">Place Order</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

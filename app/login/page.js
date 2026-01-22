import Link from 'next/link';

export const metadata = {
  title: 'Login | Medicoz',
  description: 'Login to your account',
};

export default function LoginPage() {
  return (
    <section
      className="login-section"
      style={{
        backgroundImage: 'url(/images/background/banner.jpg)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="auto-container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <div
              className="login-box p-5"
              style={{
                backgroundColor: '#fff',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              }}
            >
              <div className="text-center mb-4">
                <h2>Welcome Back</h2>
                <p>Login to your account</p>
              </div>
              <form>
                <div className="mb-3">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="remember" />
                    <label className="form-check-label" htmlFor="remember">
                      Remember me
                    </label>
                  </div>
                  <a href="#" style={{ color: '#00a6fb' }}>
                    Forgot Password?
                  </a>
                </div>
                <button type="submit" className="theme-btn btn-style-one w-100 mb-3">
                  <span className="btn-title">Login</span>
                </button>
              </form>
              <div className="text-center mt-4">
                <p>
                  Don&apos;t have an account?{' '}
                  <a href="#" style={{ color: '#00a6fb' }}>
                    Sign Up
                  </a>
                </p>
              </div>
              <div className="text-center mt-3">
                <Link href="/" className="btn btn-link">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

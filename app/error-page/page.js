import Link from 'next/link';

export const metadata = {
  title: 'Error 404 | Medicoz',
  description: 'Page not found',
};

export default function ErrorPage() {
  return (
    <section
      className="error-section"
      style={{
        backgroundImage: 'url(/images/background/banner.jpg)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="auto-container text-center">
        <div className="content-box">
          <h1
            style={{ color: '#fff', fontSize: '150px', fontWeight: 'bold', marginBottom: '20px' }}
          >
            404
          </h1>
          <h2 style={{ color: '#fff', fontSize: '36px', marginBottom: '20px' }}>
            Oops! Page Not Found
          </h2>
          <p style={{ color: '#fff', fontSize: '18px', marginBottom: '40px' }}>
            The page you are looking for might have been removed, had its name changed, or is
            temporarily unavailable.
          </p>
          <div className="btn-box">
            <Link href="/" className="theme-btn btn-style-one">
              <span className="btn-title">Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

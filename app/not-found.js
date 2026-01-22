import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="error-section h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <div className="auto-container">
        <div className="content">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-4xl font-semibold text-secondary mb-6">Page Not Found</h2>
          <div className="text-lg text-text-light mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is
            temporarily unavailable.
          </div>
          <Link
            href="/"
            className="theme-btn btn-style-one bg-primary text-white px-8 py-3 rounded-md hover:bg-secondary transition-colors inline-flex items-center"
          >
            <span className="btn-title">Go Back Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

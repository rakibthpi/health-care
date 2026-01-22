import PageBanner from '@/components/common/PageBanner';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'Quote Post | Medicoz',
  description: 'Blog post with quote',
};

export default function BlogPostQuotePage() {
  return (
    <MainLayout>
      <PageBanner title="Quote Post" breadcrumb={['Home', 'Blog', 'Quote Post']} />
      <section className="blog-post-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-post-content">
                <div
                  className="quote-box mb-4 p-5"
                  style={{ backgroundColor: '#00a6fb', borderRadius: '10px', textAlign: 'center' }}
                >
                  <i
                    className="fas fa-quote-left"
                    style={{
                      fontSize: '48px',
                      color: 'rgba(255,255,255,0.3)',
                      marginBottom: '20px',
                    }}
                  ></i>
                  <blockquote
                    style={{
                      color: '#fff',
                      fontSize: '24px',
                      fontStyle: 'italic',
                      lineHeight: 1.6,
                    }}
                  >
                    "The greatest wealth is health. Take care of your body, it's the only place you
                    have to live."
                  </blockquote>
                  <cite
                    style={{ color: '#fff', fontSize: '18px', marginTop: '20px', display: 'block' }}
                  >
                    - Hippocrates
                  </cite>
                </div>
                <div className="post-meta mb-3">
                  <span>
                    <i className="far fa-calendar"></i> January 23, 2026
                  </span>
                  <span className="ms-3">
                    <i className="far fa-user"></i> Admin
                  </span>
                </div>
                <h2>Words of Wisdom</h2>
                <p>
                  Inspirational quotes from leading medical professionals and health advocates to
                  motivate your health journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

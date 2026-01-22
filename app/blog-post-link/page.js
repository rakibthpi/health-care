import PageBanner from '@/components/common/PageBanner';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'Link Post | Medicoz',
  description: 'Blog post with external link',
};

export default function BlogPostLinkPage() {
  return (
    <MainLayout>
      <PageBanner title="Link Post" breadcrumb={['Home', 'Blog', 'Link Post']} />
      <section className="blog-post-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-post-content">
                <div
                  className="link-box mb-4 p-4"
                  style={{ backgroundColor: '#00a6fb', borderRadius: '10px' }}
                >
                  <h3 style={{ color: '#fff' }}>
                    <i className="fas fa-link me-2"></i>
                    World Health Organization - COVID-19 Updates
                  </h3>
                  <a
                    href="https://www.who.int"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#fff', fontSize: '18px' }}
                  >
                    https://www.who.int
                  </a>
                </div>
                <div className="post-meta mb-3">
                  <span>
                    <i className="far fa-calendar"></i> January 23, 2026
                  </span>
                  <span className="ms-3">
                    <i className="far fa-user"></i> Admin
                  </span>
                </div>
                <h2>Important Health Resources</h2>
                <p>
                  Stay informed with the latest health guidelines and recommendations from trusted
                  health organizations around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

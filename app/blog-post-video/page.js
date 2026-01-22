import PageBanner from '@/components/common/PageBanner';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'Video Post | Medicoz',
  description: 'Blog post with video content',
};

export default function BlogPostVideoPage() {
  return (
    <MainLayout>
      <PageBanner title="Video Post" breadcrumb={['Home', 'Blog', 'Video Post']} />
      <section className="blog-post-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-post-content">
                <div
                  className="video-box mb-4"
                  style={{
                    position: 'relative',
                    paddingBottom: '56.25%',
                    height: 0,
                    overflow: 'hidden',
                    borderRadius: '10px',
                    backgroundColor: '#000',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                    }}
                  >
                    <a
                      href="https://www.youtube.com/watch?v=4UvS3k8D4rs"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: '#00a6fb',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: '32px',
                        textDecoration: 'none',
                      }}
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                </div>
                <div className="post-meta mb-3">
                  <span>
                    <i className="far fa-calendar"></i> January 23, 2026
                  </span>
                  <span className="ms-3">
                    <i className="far fa-user"></i> Admin
                  </span>
                </div>
                <h2>Medical Procedures Explained</h2>
                <p>
                  Watch our medical experts explain various procedures, treatments, and health tips
                  in easy-to-understand video content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

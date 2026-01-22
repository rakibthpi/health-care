import PageBanner from '@/components/common/PageBanner';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'Audio Post | Medicoz',
  description: 'Blog post with audio content',
};

export default function BlogPostAudioPage() {
  return (
    <MainLayout>
      <PageBanner title="Audio Post" breadcrumb={['Home', 'Blog', 'Audio Post']} />
      <section className="blog-post-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-post-content">
                <div
                  className="audio-box mb-4 p-4"
                  style={{ backgroundColor: '#f5f5f5', borderRadius: '10px' }}
                >
                  <div
                    className="audio-player"
                    style={{ display: 'flex', alignItems: 'center', gap: '20px' }}
                  >
                    <button
                      className="play-btn"
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: '#00a6fb',
                        border: 'none',
                        color: '#fff',
                        fontSize: '24px',
                      }}
                    >
                      <i className="fas fa-play"></i>
                    </button>
                    <div className="audio-info">
                      <h4>Health Talk Podcast - Episode 25</h4>
                      <p style={{ margin: 0, color: '#666' }}>Duration: 45:30</p>
                    </div>
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
                <h2>Health Talk Podcast</h2>
                <p>
                  Listen to our medical experts discuss the latest in healthcare, wellness tips, and
                  answers to your health questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

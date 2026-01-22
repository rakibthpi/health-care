import Image from 'next/image';
import Link from 'next/link';

import PageBanner from '@/components/common/PageBanner';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'Image Post | Medicoz',
  description: 'Read our blog post with featured image',
};

export default function BlogPostImagePage() {
  return (
    <MainLayout>
      <PageBanner title="Image Post" breadcrumb={['Home', 'Blog', 'Image Post']} />
      <section className="blog-post-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-post-content">
                <div className="featured-image mb-4">
                  <Image
                    src="/images/resource/news-1.jpg"
                    alt="Featured Image"
                    width={800}
                    height={450}
                    style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                  />
                </div>
                <div className="post-meta mb-3">
                  <span>
                    <i className="far fa-calendar"></i> January 23, 2026
                  </span>
                  <span className="ms-3">
                    <i className="far fa-user"></i> Admin
                  </span>
                  <span className="ms-3">
                    <i className="far fa-comments"></i> 5 Comments
                  </span>
                </div>
                <h2>Integrative Medicine & Cancer Treatment</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <blockquote>
                  <p>
                    The best time to plant a tree was 20 years ago. The second best time is now.
                    Taking care of your health today ensures a better tomorrow.
                  </p>
                </blockquote>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="sidebar">
                <div className="sidebar-widget">
                  <h4>Categories</h4>
                  <ul>
                    <li>
                      <Link href="/blog-standard">Health Tips</Link>
                    </li>
                    <li>
                      <Link href="/blog-standard">Medical News</Link>
                    </li>
                    <li>
                      <Link href="/blog-standard">Research</Link>
                    </li>
                    <li>
                      <Link href="/blog-standard">Prevention</Link>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget mt-4">
                  <h4>Recent Posts</h4>
                  <ul>
                    <li>
                      <Link href="/blog-post-image">Achieving Better Health Care</Link>
                    </li>
                    <li>
                      <Link href="/blog-post-image">Great Health Care For Patients</Link>
                    </li>
                    <li>
                      <Link href="/blog-post-image">Medical Breakthrough 2026</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

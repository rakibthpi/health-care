import MainLayout from '@/components/layout/MainLayout';
import PageBanner from '@/components/common/PageBanner';

export const metadata = {
  title: 'UI Elements | Medicoz',
  description: 'Explore our UI components and elements',
};

export default function ElementsPage() {
  return (
    <MainLayout>
      <PageBanner title="UI Elements" breadcrumb={['Home', 'UI Elements']} />
      <section className="elements-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">UI ELEMENTS</span>
            <h2 className="text-reveal-anim">Design Components</h2>
            <span className="divider"></span>
          </div>

          {/* Buttons Section */}
          <div className="row mb-5">
            <div className="col-12">
              <h3>Buttons</h3>
              <div className="btn-box mt-3">
                <a href="#" className="theme-btn btn-style-one">
                  <span className="btn-title">Primary Button</span>
                </a>
                <a href="#" className="theme-btn btn-style-two ms-3">
                  <span className="btn-title">Secondary Button</span>
                </a>
              </div>
            </div>
          </div>

          {/* Typography Section */}
          <div className="row mb-5">
            <div className="col-12">
              <h3>Typography</h3>
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>
              <h5>Heading 5</h5>
              <h6>Heading 6</h6>
              <p>
                This is a paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

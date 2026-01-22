import Link from 'next/link';

export default function PageBanner({ title, breadcrumb = [] }) {
  return (
    <section
      className="page-title"
      style={{ backgroundImage: 'url(/images/background/banner.jpg)' }}
    >
      <div className="auto-container">
        <div className="title-outer">
          <h1>{title}</h1>
          <ul className="page-breadcrumb">
            {breadcrumb.map((item, index) => (
              <li key={index}>
                {index < breadcrumb.length - 1 ? (
                  <>
                    <Link href={index === 0 ? '/' : '#'}>{item}</Link>
                  </>
                ) : (
                  <span>{item}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

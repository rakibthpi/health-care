import './globals.css';

import Script from 'next/script';

import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  title: 'Medicoz | Health and Medical HTML Template',
  description: 'Medical & Health Care Template',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="/css/bootstrap.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/responsive.css" rel="stylesheet" />
        <link href="/css/color-themes/default-theme.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        {/* Favicon */}
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
      </head>
      <body>
        <div className="page-wrapper">
          {children}
          <ScrollToTop />
        </div>

        {/* Scripts */}
        <Script src="/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/js/popper.min.js" strategy="lazyOnload" />
        <Script src="/js/bootstrap.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.fancybox.js" strategy="lazyOnload" />
        <Script src="/js/mmenu.polyfills.js" strategy="lazyOnload" />
        <Script src="/js/mmenu.js" strategy="lazyOnload" />
        <Script src="/js/appear.js" strategy="lazyOnload" />
        <Script src="/js/wow.js" strategy="lazyOnload" />
        <Script src="/js/swiper.js" strategy="lazyOnload" />
        <Script src="/js/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}

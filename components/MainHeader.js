'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { MENU_ITEMS } from '@/constants/menuData';

export default function MainHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveSubMenu(null);
  };

  const toggleSubMenu = (index) => {
    if (activeSubMenu === index) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(index);
    }
  };

  // Sticky header logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu on route change
  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  const renderDesktopMenu = (items) => {
    return items.map((item, index) => (
      <li
        key={index}
        className={`${item.children ? 'dropdown' : ''} ${pathname === item.href ? 'current' : ''}`}
      >
        {item.href === '#' || item.children ? (
          <span>{item.title}</span>
        ) : (
          <Link href={item.href}>{item.title}</Link>
        )}

        {item.children && (
          <ul>
            {item.children.map((child, childIndex) => (
              <li key={childIndex} className={child.children ? 'dropdown' : ''}>
                {child.children ? (
                  <>
                    <span>{child.title}</span>
                    <ul>
                      {child.children.map((subChild, subChildIndex) => (
                        <li key={subChildIndex}>
                          <Link href={subChild.href}>{subChild.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={child.href}>{child.title}</Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </li>
    ));
  };

  const renderMobileMenu = (items) => {
    return items.map((item, index) => (
      <li key={index} className="border-b border-gray-100 last:border-0 block">
        <div className="flex justify-between items-center py-2 pr-4">
          {item.href === '#' || item.children ? (
            <span
              className="flex-1 text-sm md:text-lg font-medium text-text cursor-pointer hover:text-primary"
              onClick={() => item.children && toggleSubMenu(index)}
            >
              {item.title}
            </span>
          ) : (
            <Link
              href={item.href}
              className="flex-1 text-lg font-medium text-text hover:text-primary"
            >
              {item.title}
            </Link>
          )}

          {item.children && (
            <button
              onClick={() => toggleSubMenu(index)}
              className={`w-5 h-5 md:w-8 md:h-8 flex items-center justify-center transition-transform duration-300 ${activeSubMenu === index ? 'rotate-180' : ''}`}
            >
              <i className="fas fa-angle-down text-text-light"></i>
            </button>
          )}
        </div>

        {item.children && (
          <div
            className={`overflow-hidden transition-all duration-300 ${activeSubMenu === index ? 'max-h-[1000px] opacity-100 mb-2' : 'max-h-0 opacity-0'}`}
          >
            <ul className="pl-4 space-y-2 bg-gray-50 rounded-md p-2">
              {item.children.map((child, childIndex) => (
                <li key={childIndex}>
                  {child.children ? (
                    // Handling Multi-level dropdown in mobile if needed, for simplicity flattening or just listing
                    <div className="py-1">
                      <span className="font-medium text-text-light block mb-1">{child.title}</span>
                      <ul className="pl-3 border-l-2 border-gray-200">
                        {child.children.map((subChild, subSubIndex) => (
                          <li key={subSubIndex}>
                            <Link
                              href={subChild.href}
                              className="block py-1 text-sm text-text-light hover:text-primary"
                            >
                              {subChild.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={child.href}
                      className="block py-1 text-text-light hover:text-primary"
                    >
                      {child.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    ));
  };

  return (
    <>
      <header className={`main-header header-style-one ${isSticky ? 'fixed-header' : ''}`}>
        {/* Header top */}
        <div className="header-top">
          <div className="auto-container">
            <div className="inner-container">
              <div className="top-left">
                <ul className="contact-list clearfix">
                  <li>
                    <i className="fas fa-map-location-dot"></i>
                    234 Triumph, Los Angeles, California, US
                  </li>
                  <li>
                    <i className="fas fa-clock"></i>
                    Mon - Sat 8.00 - 18.00. Sunday CLOSED
                  </li>
                </ul>
              </div>
              <div className="top-right">
                <ul className="social-icon-one">
                  <li>
                    <a href="#">
                      <span className="fab fa-facebook-f"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fab fa-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fab fa-skype"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fab fa-linkedin-in"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Top */}

        {/* Header Lower */}
        <div className="header-lower">
          <div className="auto-container">
            <div className="main-box">
              <div className="logo-box">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/logo.png"
                      alt="Logo"
                      width={200}
                      height={50}
                      style={{ height: 'auto' }}
                    />
                  </Link>
                </div>
              </div>

              {/* Nav Box */}
              <div className="nav-outer">
                <nav className="nav main-menu">
                  <ul className="navigation" id="navbar">
                    {renderDesktopMenu(MENU_ITEMS)}
                  </ul>
                </nav>
                {/* Main Menu End */}

                <div className="outer-box">
                  <button className="search-btn">
                    <span className="fas fa-search"></span>
                  </button>
                  <Link
                    href="/appointment"
                    id="appointment-btn"
                    className="theme-btn btn-style-one"
                  >
                    <span className="btn-title">Appointment</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Header */}
        <div className={`sticky-header ${isSticky ? 'fixed-header animated slideInDown' : ''}`}>
          <div className="auto-container">
            <div className="main-box">
              <div className="logo-box">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/logo.png"
                      alt="Logo"
                      width={150}
                      height={40}
                      style={{ height: 'auto' }}
                    />
                  </Link>
                </div>
              </div>
              <div className="keep-empty"></div>
            </div>
          </div>
        </div>
        {/* End Sticky Menu */}

        {/* Mobile Header */}
        <div className="mobile-header">
          <div className="logo">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={30}
                style={{ height: 'auto' }}
              />
            </Link>
          </div>

          {/* Nav Box */}
          <div className="nav-outer clearfix">
            <div className="outer-box">
              {/* Search Btn */}
              <div className="search-box">
                <button className="search-btn mobile-search-btn">
                  <i className="fas fa-magnifying-glass"></i>
                </button>
              </div>

              <button onClick={toggleMobileMenu} className="mobile-nav-toggler navbar-trigger">
                <span className="fas fa-bars"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <div
          className={`mobile-nav-overlay ${isMobileMenuOpen ? 'block' : 'hidden'} fixed inset-0 bg-black/50 z-[9998]`}
          onClick={closeMobileMenu}
        ></div>

        {/* Mobile Nav Sidebar */}
        <div
          className={`mobile-nav-container fixed top-0 right-0 w-[300px] h-full bg-white z-[9999] transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto shadow-2xl`}
        >
          <div className="py-1 px-4">
            <div className="flex justify-end items-center mb-4">
              <button
                onClick={closeMobileMenu}
                className="close-btn text-2xl text-text hover:text-primary bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <ul className="navigation-mobile">{renderMobileMenu(MENU_ITEMS)}</ul>

            <div className="contact-info mt-8 pt-8 border-t border-gray-100">
              <div className="icon-box flex items-center mb-4">
                <span className="icon fas fa-map-location-dot text-primary text-2xl mr-3"></span>
                <div className="text">
                  <strong className="block text-text">Address</strong>
                  <span className="text-text-light text-sm">
                    234 Triumph, Los Angeles, California, US
                  </span>
                </div>
              </div>
              <div className="icon-box flex items-center">
                <span className="icon fas fa-clock text-primary text-2xl mr-3"></span>
                <div className="text">
                  <strong className="block text-text">Schedule</strong>
                  <span className="text-text-light text-sm">
                    Mon - Sat 8.00 - 18.00
                    <br />
                    Sunday CLOSED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header Search */}
        <div className="search-popup">
          <span className="search-back-drop"></span>
          <button className="close-search">
            <span className="fas fa-times"></span>
          </button>

          <div className="search-inner">
            <form method="post" action="blog-showcase.html">
              <div className="form-group">
                <input type="search" name="search-field" placeholder="Search..." required />
                <button type="submit">
                  <i className="fas fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* End Header Search */}
      </header>
    </>
  );
}

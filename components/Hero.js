'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Hero() {
  return (
    <section className="banner-section-one">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="banner-swiper"
      >
        <SwiperSlide className="slide-item">
          <div
            className="bg bg-image"
            style={{ backgroundImage: 'url(/images/main-slider/1.jpg)' }}
          ></div>
          <div className="auto-container">
            <div className="content-outer">
              <div className="content-box">
                <span className="title animate-2">Welcome to our Medical Care Center</span>
                <h2 className="animate-3">
                  We take care our
                  <br />
                  patients health
                </h2>
                <div className="text animate-4">
                  I realized that becoming a doctor, I can only help a small community.
                  <br />
                  But by becoming a doctor, I can help my whole country.
                </div>
                <div className="btn-box animate-5">
                  <a href="about-us.html" className="theme-btn btn-style-one">
                    <span className="btn-title">About Us</span>
                  </a>
                  <a href="departments.html" className="theme-btn btn-style-two">
                    <span className="btn-title">Our Services</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide-item">
          <div
            className="bg bg-image"
            style={{ backgroundImage: 'url(/images/main-slider/2.jpg)' }}
          ></div>
          <div className="auto-container">
            <div className="content-outer">
              <div className="content-box">
                <span className="title animate-2">Welcome to our Medical Care Center</span>
                <h2 className="animate-3">
                  We take care our
                  <br />
                  patients health
                </h2>
                <div className="text animate-4">
                  I realized that becoming a doctor, I can only help a small community.
                  <br />
                  But by becoming a doctor, I can help my whole country.
                </div>
                <div className="btn-box animate-5">
                  <a href="about-us.html" className="theme-btn btn-style-one">
                    <span className="btn-title">About Us</span>
                  </a>
                  <a href="departments.html" className="theme-btn btn-style-two">
                    <span className="btn-title">Our Services</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="default-btn">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </Swiper>
    </section>
  );
}

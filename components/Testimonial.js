'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { useState } from 'react';
import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Testimonial() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="testimonial-section">
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title text-center">
          <span className="title">HAPPY Patient</span>
          <h2 className="text-reveal-anim">What Says Our Patients</h2>
          <span className="divider"></span>
        </div>

        <div className="testimonial-outer">
          {/* Client Testimonial Carousel */}
          <Swiper
            modules={[Navigation, Thumbs]}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            className="testi-content-swiper"
          >
            {[...Array(6)].map((_, i) => (
              <SwiperSlide className="testimonial-block" key={i}>
                <div className="inner-box">
                  <div className="text">
                    Medical Centre is a great place to get all of your medical needs. I came in for
                    a check up and did not wait more than 5 minutes before I was seen. I can only
                    imagine the type of service you get for more serious issues. Thanks!
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="client-thumb-outer">
            <Swiper
              modules={[Thumbs]}
              onSwiper={setThumbsSwiper}
              slidesPerView={5}
              spaceBetween={10}
              centeredSlides={true}
              loop={true}
              slideToClickedSlide={true}
              className="testi-thumbs-swiper"
            >
              {[...Array(6)].map((_, i) => (
                <SwiperSlide className="thumb-item" key={i}>
                  <figure className="thumb-box">
                    <img src={`/images/resource/testi-thumb-${(i % 3) + 1}.jpg`} alt="" />
                  </figure>
                  <div className="author-info">
                    <span className="icon fas fa-quote-left"></span>
                    <div className="author-name">Lara Croft</div>
                    <div className="designation">Restaurant Owner</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="swiper-button-prev" style={{ left: '0' }}></div>
          <div className="swiper-button-next" style={{ right: '0' }}></div>
        </div>
      </div>
    </section>
  );
}

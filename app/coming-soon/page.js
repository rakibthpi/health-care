'use client';

import { useEffect, useState } from 'react';

export const metadata = {
  title: 'Coming Soon | Medicoz',
  description: 'We are launching soon',
};

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); // 30 days from now

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="coming-soon-section"
      style={{
        backgroundImage: 'url(/images/background/banner.jpg)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="auto-container text-center">
        <div className="content-box">
          <h1 style={{ color: '#fff', fontSize: '48px', marginBottom: '30px' }}>Coming Soon</h1>
          <p style={{ color: '#fff', fontSize: '18px', marginBottom: '40px' }}>
            We are working hard to bring you something amazing. Stay tuned!
          </p>
          <div
            className="countdown-box"
            style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}
          >
            <div className="countdown-item" style={{ textAlign: 'center', color: '#fff' }}>
              <span style={{ fontSize: '48px', fontWeight: 'bold' }}>{timeLeft.days}</span>
              <p>Days</p>
            </div>
            <div className="countdown-item" style={{ textAlign: 'center', color: '#fff' }}>
              <span style={{ fontSize: '48px', fontWeight: 'bold' }}>{timeLeft.hours}</span>
              <p>Hours</p>
            </div>
            <div className="countdown-item" style={{ textAlign: 'center', color: '#fff' }}>
              <span style={{ fontSize: '48px', fontWeight: 'bold' }}>{timeLeft.minutes}</span>
              <p>Minutes</p>
            </div>
            <div className="countdown-item" style={{ textAlign: 'center', color: '#fff' }}>
              <span style={{ fontSize: '48px', fontWeight: 'bold' }}>{timeLeft.seconds}</span>
              <p>Seconds</p>
            </div>
          </div>
          <div className="btn-box mt-5">
            <a href="/" className="theme-btn btn-style-one">
              <span className="btn-title">Back to Home</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

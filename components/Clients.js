import Image from 'next/image';

export default function Clients() {
  return (
    <section className="clients-section">
      <div className="auto-container">
        <div className="swiper client-swiper">
          <div className="swiper-wrapper">
            {/* Client Block - Repeating specific images as per original HTML order */}
            {['1', '2', '3', '4', '5'].map((num, index) => (
              <div className="client-block swiper-slide" key={index}>
                <div className="inner-box">
                  <figure className="image">
                    <a href="#">
                      <img src={`images/clients/${num}.png`} alt="Client" />
                    </a>
                  </figure>
                </div>
              </div>
            ))}
            {/* Repeat for endless loop content if needed, though Swiper 'loop: true' handles it if configured */}
          </div>
        </div>
      </div>
    </section>
  );
}

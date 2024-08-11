// Carousel.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Carousel.scss'; // Import custom styles

// Sample data for carousel items
const carouselItems = [
  { id: 1, src: '/assets/images/bottom1.jpg', alt: 'Item 1' },
  { id: 2, src: '/assets/images/bottom2.png', alt: 'Item 2' },
  { id: 3, src: '/assets/images/bottom3.png', alt: 'Item 3' },
  { id: 4, src: '/assets/images/bottom1.jpg', alt: 'Item 4' },
  { id: 5, src: '/assets/images/bottom2.png', alt: 'Item 5' }
];

const Carousel: React.FC = () => {
  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={20} // Space between slides
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        navigation
      >
        {carouselItems.map(item => (
          <SwiperSlide key={item.id} className="carousel-item">
            <img src={item.src} alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

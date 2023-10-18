import { useState } from 'react';
import '../styles/carousel.css';
import arrow from '../img/arrow.png';

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide + 1) % data.pictures.length);
  };

  const prevSlide = () => {
    setSlide((slide - 1 + data.pictures.length) % data.pictures.length);
  };

  return (
    <div className='carousel-container'>
      <img
        src={arrow}
        className='arrow-left'
        alt='to-the-left'
        onClick={prevSlide}
      />
      <div className='slides-container'>
        {data.pictures.map((item, index) => (
          <img
            src={item}
            alt='aperçu-appartement'
            key={index}
            className={`slide ${slide === index ? 'slide-active' : ''}`}
          />
        ))}
      </div>
      <img
        src={arrow}
        className='arrow-right'
        alt='to-the-right'
        onClick={nextSlide}
      />
      <span className='index'>
        {slide + 1}/{data.pictures.length}
      </span>
    </div>
  );
};

export default Carousel;

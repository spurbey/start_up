"use client";
import React, { useState, useEffect } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const Carousel = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [images]);

  const prevSlide = () => {
    setSlideIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <ul className="carousel-images">
          {images.map((image, index) => (
            <li
              key={index}
              className={`carousel-image ${
                index === slideIndex ? "active" : ""
              }`}
            >
              <img src={image.imageUrl} alt={image.description} />
            </li>
          ))}
        </ul>
      </div>
      <div className="carousel-navigation">
        <button className="carousel-button prev" onClick={prevSlide}>
          <GrPrevious />
        </button>
        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`carousel-dot ${index === slideIndex ? "active" : ""}`}
              onClick={() => setSlideIndex(index)}
            />
          ))}
        </div>
        <button className="carousel-button next" onClick={nextSlide}>
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

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
          <div class="overlay"></div>
          {images.map((image, index) => (
            <li
              key={index}
              className={`carousel-image ${
                index === slideIndex ? "active" : "inactive"
              }`}
            >
              <img src={image.imageUrl} alt={image.description} />
            </li>
          ))}
          <div className="carousel-navigation">
              <div class="overlay">
                <button className="carousel-button prev" onClick={prevSlide}>
                  <GrPrevious />
                </button>
              </div>
              <div className="carousel-dots">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`carousel-dot ${index === slideIndex ? "active" : ""}`}
                    onClick={() => setSlideIndex(index)}
                  />
                ))}
              </div>
              <div class="overlay">
                <button className="carousel-button next" onClick={nextSlide}>
                  <GrNext />
                </button>
              </div>
            </div>
        </ul>
      </div>
      
    </div>
  );
};

export default Carousel;

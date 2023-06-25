"use client";
import React, { useState, useEffect } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const Carousel = ({ images, oc }) => {
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
<<<<<<< HEAD
          <div class="overlay"></div>
=======
          {/* <div class="overlay"></div> */}
>>>>>>> 2946175bc7b4ff1066a7455ccf90c4985e8ee805
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
<<<<<<< HEAD
          <div className="carousel-navigation">
              <div class="overlay">
=======
          
          <div className="overlay-container" style={{'background-color':`rgba(0,0,0,${oc})`}}></div>
          <div className="carousel-navigation">
              <div className="overlay">
>>>>>>> 2946175bc7b4ff1066a7455ccf90c4985e8ee805
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
<<<<<<< HEAD
              <div class="overlay">
=======
              <div className="overlay">
>>>>>>> 2946175bc7b4ff1066a7455ccf90c4985e8ee805
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

import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { FaChevronLeft, FaChevronRight, FaBookOpen, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

function Carousel({ items }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || !items || items.length === 0) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, items]);

  const slideLeft = () => {
    setCurrent(current === 0 ? items.length - 1 : current - 1);
  };

  const slideRight = () => {
    setCurrent(current === items.length - 1 ? 0 : current + 1);
  };

  if (!items || items.length === 0) return null;

  return (
    <section 
      className="carousel-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-container">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === current ? "slide-active" : ""}`}
          >
            <div className="carousel-image-wrap">
              <img className="carousel-img" src={item.image} alt={item.title || "StudyMate Banner"} />
              <div className="carousel-scrim" />
            </div>
            
            <div className="carousel-content">
              {item.badge && (
                <span className="carousel-badge">{item.badge}</span>
              )}
              <h1 className="carousel-title">{item.title}</h1>
              <p className="carousel-subtitle">{item.subtitle}</p>
              
              <div className="carousel-actions">
                <Link to="/Services" className="btn-primary">
                  <FaBookOpen /> Browse Materials
                </Link>
                <Link to="/cse" className="btn-secondary">
                  <FaRocket /> View Departments
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Controls */}
        <button className="carousel-arrow arrow-left" onClick={slideLeft} aria-label="Previous slide">
          <FaChevronLeft />
        </button>
        <button className="carousel-arrow arrow-right" onClick={slideRight} aria-label="Next slide">
          <FaChevronRight />
        </button>

        {/* Pagination Dots */}
        <div className="carousel-dots">
          {items.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === current ? "dot-active" : ""}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;

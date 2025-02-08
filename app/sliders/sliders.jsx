import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./sliders.css";
import { Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function App() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800&h=600&q=80",
      title: "Slide 1 Title",
      description: "This is a description for slide 1.",
      link: "/page1",
    },
    {
      image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&h=600&q=80",
      title: "Slide 2 Title",
      description: "This is a description for slide 2.",
      link: "/page2",
    },
    {
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&q=80",
      title: "Slide 3 Title",
      description: "This is a description for slide 3.",
      link: "/page3",
    },
  ];

  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => swiperRef && swiperRef.slidePrev();
  const goNext = () => swiperRef && swiperRef.slideNext();

  return (
    <div className="slider-container bg-gray-100">
<h2 className="text-4xl text-black text-center font-bold mb-4 relative group inline-block">
Our Projects
                  <span className="absolute left-0 bottom-[-6px] h-1 w-20 bg-gradient-to-r from-orange-600 via-orange-500 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </h2>      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={10}
        // pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper mt-12"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="overlay">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                {/* <a href={slide.link} className="learn-more">
                  Learn More
                </a> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="button-container">
        <button onClick={goPrev} disabled={activeIndex === 0} className="nav-button">
          <FaArrowLeft />
        </button>
        <button onClick={goNext} disabled={activeIndex === slides.length - 1} className="nav-button">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import React from 'react'

export default function Carousel({children}:any) {

  function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute top-0 right-0 -translate-y-10 z-10   me-12"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 5l7 7-7 7"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    );
  }
  
  function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute top-0 right-0 -translate-y-10 z-10 pe-20"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 5l-7 7 7 7"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    );
  }
  const settings = {
    
    dots: true,
    arrows: true,
    infinite: false,
    speed: 800,
    slidesToShow:4.5,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  )
}

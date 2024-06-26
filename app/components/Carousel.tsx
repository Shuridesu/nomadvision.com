'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import React from 'react'
import { Button } from "@/components/ui/button";

export default function Carousel({children}:any) {

  function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
      <Button
        onClick={onClick}
        className="absolute text-gray-400 hover:text-gray-500 top-0 right-0 -translate-y-14 z-10 bg-gray-200 hover:bg-gray-300 py-4"
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
      </Button>
    );
  }
  
  function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
      <Button
        onClick={onClick}
        className="absolute text-gray-400 hover:text-gray-500 top-0 right-0 -translate-y-14 z-10 bg-gray-200 me-20 hover:bg-gray-300 py-4"
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
      </Button>
    );
  }
  const settings = {
    
    dots: false,
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
          dots: false
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

"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";


interface Props {
  articles: Post[];
}

export default function Carousel({ articles }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 2, align: "start" });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="embla mx-auto mt-12 h-72 max-w-6xl">
        <div className="embla__viewport h-full" ref={emblaRef}>
          <div className="embla__container flex h-full">
            {articles.map((article) => (
              <Link
                href={article.slug}
                className="embla__slide flex-shrink-0 w-1/2 md:w-1/3 h-full relative mr-3 shadow-lg group"
                key={article.id}
              >
                <img src={article.title_image} alt="" className="object-cover w-full h-full rounded-md" />
                <div className="absolute inset-0 h-full bg-gray-400 bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 rounded-md"/>
                <div className="absolute text-gray-900 bg-white w-full p-4 bg-opacity-80 bottom-0 rounded-b-md">
                  <h1 className="font-bold text-base">{article.title}</h1>
                  <p>{article.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <button
        className="embla__prev absolute left-6 xl:-left-8 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors duration-100 ease-in-out"
        onClick={scrollPrev}
      >
        <FaArrowLeftLong className="w-6 h-6"/>
      </button>
      <button
        className="embla__next absolute right-6 xl:-right-8 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors duration-100 ease-in-out"
        onClick={scrollNext}
      >
        <FaArrowRightLong className="w-6 h-6"/>
      </button>
    </div>
  );
}

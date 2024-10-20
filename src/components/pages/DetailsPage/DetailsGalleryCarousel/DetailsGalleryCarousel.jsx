'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DetailsGalleryCarouselCard } from "./DetailsGalleryCarouselCard/DetailsGalleryCarouselCard";
import Image from 'next/image'

export const DetailsGalleryCarousel = () => {

  const carouselConfig = {
    arrows: false,
    dots: false,
    swipeToSlide: true,
    touchThreshold: 100,
    speed: 300,
    slidesToScroll:  1,
    slidesToShow: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
};

  return (
    <Slider {...carouselConfig} className="customArrowCarousel newDetailsCarousel -ml-1 md:-ml-3">
        <DetailsGalleryCarouselCard/>
        <DetailsGalleryCarouselCard src="/assets/images/about_01.jpg" />
        <DetailsGalleryCarouselCard/>
        <DetailsGalleryCarouselCard src="/assets/images/about_01.jpg" />
        <DetailsGalleryCarouselCard/>
        <DetailsGalleryCarouselCard src="/assets/images/about_01.jpg" />
    </Slider>
  )
}

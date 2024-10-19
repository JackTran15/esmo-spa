'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IntroHomeCard } from "./IntroHomeCard/IntroHomeCard";
import { useCallback, useState } from "react";

export const IntroHomeCarousel = () => {

  const carouselConfig = {
    arrows: true,
    dots: true,
    dotsClass: 'customDotCarousel',
    swipeToSlide: true,
    touchThreshold: 100,
    speed: 300,
    infinite: true,
    centerMode: true,
    centerPadding: '400px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '200px',
        }
      },
      {
        breakpoint: 800,
        settings: {
          centerPadding: '100px',
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: '40px',
        }
      },
    ]
  };


  const [activeSlide, setActiveSlide] = useState(0)

  const handleBeforeChange = useCallback((_, nextSlide) => {
    setActiveSlide(nextSlide)
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <Slider {...carouselConfig}  
        beforeChange={handleBeforeChange}
        className="customArrowCarousel introHomeCarousel">
        {
          Array(5).fill(0).map((_,index) => (
            <IntroHomeCard key={index} isActive={activeSlide === index} />
          ))
        }
      </Slider>
    </div>
  )
}

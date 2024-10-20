'use client'

import { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HotArticleCard } from './HotArticileCard/HotArticleCard';

export const HotArticles = () => {
    const ref_slider = useRef(null);

    const carouselConfig = {
        arrows: false,
        swipeToSlide: true,
        touchThreshold: 100,
        // infinite: true,
        // lazyLoad: lazyLoad,
        // speed: speed ?? 200,
        speed: 300,
        slidesToScroll:  1,
        // variableWidth: variableWidth ?? false,
        // adaptiveHeight: adaptiveHeight ?? false,
        slidesToShow: 1,
        arrows: true,
        dots: true,
        dotsClass: 'customDotCarousel',
    };

    return (
        <div className='w-full'>
            <p className='text-gray text-sm mb-[32px]'>
            Bài viết được xem nhiều nhất
            </p>
            <Slider ref={ref_slider} {...carouselConfig} className="customArrowCarousel">
                <HotArticleCard />
                <HotArticleCard />
                <HotArticleCard />
            </Slider>
        </div>
    )
}

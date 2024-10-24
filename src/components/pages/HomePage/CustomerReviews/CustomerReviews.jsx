'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import { CustomerReviewCard } from "./CustomerReviewCard/CustomerReviewCard";

export const CustomerReviews = () => {

    const carouselConfig = {
        arrows: false,
        dots: false,
        swipeToSlide: true,
        touchThreshold: 100,
        speed: 300,
        slidesToScroll:  1,
        slidesToShow: 1,
        arrows: true,
    };


    return (
        <div className='w-full container py-[64px] md:py-[72px]'>
            <p className='md:text-center text-title_5 md:text-title_3 font-semibold text-noto'>
                Khách Hàng Nói Gì Về Emospa?
            </p>
            <p className='md:text-center mt-[16px] text-gray text-xl md:text-lg'>
                Explore the genuine feedback and testimonials from our satisfied users
            </p>
            <div className="w-full mt-[32px] md:mt-[64px]">
                <Slider {...carouselConfig} className="customArrowCarousel customerReviewCarousel">
                    <CustomerReviewCard/>
                    <CustomerReviewCard/>
                    <CustomerReviewCard/>
                </Slider>
            </div>
        </div>
    )
}

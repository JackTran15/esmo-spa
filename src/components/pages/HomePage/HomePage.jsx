import React from 'react'
import { MainHero } from './MainHero/MainHero'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { FooterArticle } from '@/components/common/FooterArticle/FooterArticle'
import { CustomerReviews } from './CustomerReviews/CustomerReviews'
import { IntroHomeCarousel } from './IntroHomeCarousel/IntroHomeCarousel'

export const HomePage = () => {
  return (
    <div className='w-full pb-[63px] md:pb-[96px]'>

      <div className='container'>
        <MainHero />
      </div>

      <div className='w-full mt-[48px]'>
        <IntroHomeCarousel />
      </div>

      {/* Dịch Vụ Chăm Sóc Da & Trị Liệu Hàng Đầu */}
      <div className='container pt-[112px] md:pt-[123px] pb-[64px] md:pb-[80px] grid md:grid-cols-2 gap-[64px]'>
        <div className='w-full h-full flex flex-col justify-center'>
            <p className='text-title_5 md:text-title_2 font-semibold text-noto'>
                Dịch Vụ Chăm Sóc Da & Trị Liệu Hàng Đầu
            </p>
            <p className='w-full mt-[16px] md:mt-[24px] text-gray'>
                Emospa tự hào mang đến cho bạn những dịch vụ spa chất lượng cao, từ chăm sóc da mặt chuyên sâu đến các liệu pháp trị liệu toàn thân thư giãn.
            </p>
            <div className='w-full mt-[32px] flex flex-col md:flex-row md:mt-[48px] gap-[16px]'>
                <Link href={'/contact'}>
                    <Button className="w-full md:w-auto">
                        Đặt Lịch Ngay
                    </Button>
                </Link>
                <Link href={'/services'}>
                    <Button variant="outline" className="w-full md:w-auto">
                        Xem Dịch Vụ
                    </Button>
                </Link>
            </div>
        </div>
        <div className='w-full'>
            <div className='w-full'>
                <Image
                  src={'/assets/images/home_banner.png'}
                  layout="responsive"
                  className='!w-full !h-full !object-cover'
                  width={10}
                  height={10}
                  alt={'Thumbnail'}
                />
            </div>
        </div>
      </div>

        <div className='w-full'>
            <CustomerReviews/>
        </div>

      <div className='w-full mt-[64px] md:mt-[95px] container'>
        <FooterArticle/>
      </div>
    </div>
  )
}

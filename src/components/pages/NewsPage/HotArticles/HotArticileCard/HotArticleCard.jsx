import React from 'react'
import Image from 'next/image'
import { ReadMoreButton } from '@/components/common/ReadMoreButton/ReadMoreButton'

export const HotArticleCard = () => {
  return (
    <div className='w-full sm:h-[400px] grid sm:grid-cols-2 sm:bg-white cursor-pointer'>
      <div className='w-full h-[256px] sm:h-full'>
        <Image 
            src={'/assets/images/service_1.jpg'}
            layout="responsive"
            className='!w-full !h-full !object-cover object-bottom'
            width={10}
            height={10}
            alt={'Thumbnail'}
        />
      </div>
      <div className='w-full pt-[32px] sm:p-[32px]'>
        <p className='text-title_4 font-semibold line-clamp-2'>
          Effective product marketing techniques for small businesses
        </p>
        <p className='line-clamp-2 text-gray text-md mt-[16px]'>
          Learn the essential steps to turn your product idea into a thriving business.
        </p>
        <ReadMoreButton className='mt-[24px] sm:hidden' />
      </div>
    </div>
  )
}

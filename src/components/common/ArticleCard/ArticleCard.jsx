import React from 'react'
import Image from 'next/image'
import { ReadMoreButton } from '../ReadMoreButton/ReadMoreButton'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const ArticleCard = ({ className = '', isBiggest = false }) => {

    const thumbnailWrapper = cn("mw-full max-h-[200px] md:max-h-[225px] h-full bg-black thumbnailWrapper", {
        "min-h-[unset] md:h-[288px]": isBiggest
    })

  return (
        <div className='w-full h-full flex flex-col cursor-pointer'>
            <Link href={'/details'}>
                <div className={thumbnailWrapper}>
                    <Image 
                        src={'/assets/images/service_1.jpg'}
                        layout="responsive"
                        className='!w-full !h-full !object-cover object-bottom'
                        width={10}
                        height={10}
                        alt={'Thumbnail'}
                    /> 
                </div>
            </Link>
            <div className='grow flex flex-col justify-between pt-[32px]'>
                <div className='w-full'>
                    <p className='w-full text-lg font-semibold line-clamp-2 text-noto'>
                        Effective product marketing techniques for small businesses
                    </p>
                    <p className='w-full text-md text-gray mt-[8px] line-clamp-2'>
                        Explore cost-effective marketing strategies to promote your product business.Explore cost-effective marketing strategies to promote your product business.
                    </p>
                    
                </div>
                <Link href={'/details'}>
                    <ReadMoreButton className='mt-[24px]' />
                </Link>
            </div>
        </div>
  )
}

import { ReadMoreButton } from '@/components/common/ReadMoreButton/ReadMoreButton'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ServiceCard = ({ thumbnail, alt='Thumbnail', title, description, link, isReverse }) => {

    const className = cn("w-full flex-col-reverse md:flex-row flex gap-[48px] md:gap-[100px] items-end py-[32px] md:py-[96px]", {
        'md:flex-row-reverse': isReverse
    })

  return (
    <div className={className}>
        <div className='w-full md:max-w-[50%] shrink-0'>
            {
                thumbnail ? 
                <Image 
                    src={thumbnail}
                    layout="responsive"
                    width={10}
                    height={10}
                    alt={alt}
                /> : null
            }
        </div>
        <div className='w-full'>
            <p className='text-title_2 font-semibold text-noto'>
                {title}
            </p>
            <p className='text-lg mt-[16px]'>
                {description}
            </p>
            <Link href={link}>
                <ReadMoreButton className='mt-[16px]' />
            </Link>
        </div>
    </div>
  )
}

import Image from 'next/image'
import { RatingStar } from './RatingStar/RatingStar'

export const CustomerReviewCard = () => {
  return (
    <div className='w-full md:h-[300px] flex flex-col md:flex-row gap-[32px] md:gap-[116px] cursor-pointer'>
        <div className="w-full md:max-w-[300px] shrink-0 rounded-md overflow-hidden">
            <Image 
                src={'/assets/images/service_1.jpg'}
                layout="responsive"
                className='!w-full !h-full !object-cover'
                width={10}
                height={10}
                alt={'Thumbnail'}
            /> 
        </div>
        <div className="w-full">
            <div className='w-full flex mb-[32px]'>
                <RatingStar/>
            </div>
            <p className="text-title_5 md:text-title_3 font-medium text-noto">
                The product's flexibility and customization options are outstanding. It adapts perfectly to our unique needs.
            </p>
            <div className='flex items-center gap-[8px] mt-[32px]'>
                <p className='text-md font-semibold'>
                    Victoria parrish
                </p>
                <div className='w-[4px] h-[4px] rounded-full bg-black'></div>
                <span className='text-sm text-gray'>
                    Project Manager
                </span>
            </div>
        </div>
    </div>
  )
}

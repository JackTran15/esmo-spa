import Image from 'next/image'
import React from 'react'

export const LocationItem = () => {
  return (
    <div className='w-full'>
        <div className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center'>
            <div className='w-[24px] h-[24px]'>
                <Image 
                    src={'/assets/icons/ic_location.svg'}
                    layout="responsive"
                    className='!w-full !h-full !object-cover object-bottom'
                    width={10}
                    height={10}
                    alt={'Register news'}
                /> 
            </div>
        </div>
        <p className='mt-[16px] text-title_5 font-semibold text-noto'>
            Chi Nhánh 1
        </p>
        <div className='w-full flex flex-col mt-[16px] gap-[8px]'>
            <p className='text-primary text-md font-medium'>
                193A/7, Đ.Nam Kỳ Khởi Nghĩa , P.Võ Thị Sáu , Q.3 , TP.HCM
            </p>
            <p className='text-primary text-md font-medium'>
                Booking: 0283 547 22 33
            </p>
            <p className='text-primary text-md font-medium'>
            Hotline : 0931.477.279
            </p>
        </div>
    </div>
  )
}

import React from 'react'
import { PackageItem } from './PackageItem/PackageItem'

export const ServicePackage = () => {
  return (
    <div className='w-full'>
        <p className='text-center text-title_4 md:text-title_3 font-semibold'>
          Các gói dịch vụ Massage tình nhân tại 
          EMO SPA:
        </p>
        <p className='text-lg text-gray mt-[16px]'>
          EmoSpa mang đến cho bạn hành trình chăm sóc bản thân trọn vẹn với đa dạng dịch vụ và liệu trình chuyên nghiệp. 
        </p>
        <div className='w-full grid md:grid-cols-2 gap-[16px] md:gap-[32px] mt-[48px] md:mt-[64px]'>
          <PackageItem/>
          <PackageItem/>
        </div>
    </div>
  )
}

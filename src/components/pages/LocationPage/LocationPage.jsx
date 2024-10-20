import React from 'react'
import { LocationItem } from './LocationItem/LocationItem'
import { RegisterNews } from '@/components/common/RegisterNews/RegisterNews'

export const LocationPage = () => {
  return (
    <div className='container pt-[64px] sm:pt-[96px] pb-[32px] sm:pb-[64px]'>
        <p className='text-center text-title_3 font-semibold w-full'>
            Hệ thống EmoSpa
        </p>
        <p className='text-center text-gray mt-[16px] max-w-[768px] w-full mx-auto'>
            Khám phá dịch vụ chăm sóc da và trị liệu thư giãn hoàn hảo tại Emospa - Nơi mang lại sự cân bằng cho tâm hồn và cơ thể bạn.
        </p>
        <div className='w-full h-[338px] sm:h-[626px] mt-[48px] sm:mt-[64px]'>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.190436254794!2d106.66875850253642!3d10.796721902996381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175298a5db9e60b%3A0xeddf75fc3d650fb0!2sEmoSpa!5e0!3m2!1svi!2s!4v1729049491645!5m2!1svi!2s" 
                className='w-full h-full'
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"/>
        </div>
        <div className='grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-[48px] gap-x-[56px] gap-y-[56px] sm:gap-y-[48px]'>
            <LocationItem/>
            <LocationItem/>
            <LocationItem/>
            <LocationItem/>
            <LocationItem/>
            <LocationItem/>
            <LocationItem/>
            <LocationItem/>
        </div>
        <div className='w-full mt-[128px] sm:mt-[160px]'>
            <RegisterNews />
        </div>
    </div>
  )
}

import React from "react";
import Image from 'next/image'
import { ReadMoreButton } from "@/components/common/ReadMoreButton/ReadMoreButton"
import { cn } from "@/lib/utils";

export const IntroHomeCard = ({ isActive }) => {

  const imageClassName = cn("w-full scale-90 ease-in duration-300", {
    "scale-100": isActive
  })

  const wrapperDescriptionClassName = cn("w-full py-[24px] px-[16px]", {
    "hidden": !isActive
  })

  return (
    <div className={'w-full xl:max-w-[550px] mx-auto'}>
        <div className={imageClassName}>
            <Image 
                src={'/assets/images/service_1.jpg'}
                layout="responsive"
                className='!w-full !h-full !object-cover object-bottom'
                width={10}
                height={10}
                alt={'Thumbnail'}
            /> 
        </div>
        <div className={wrapperDescriptionClassName}>
            <p className="text-center text-title_5 md:text-title_4 font-semibold text-brown-3 text-noto">
                Liệu pháp Massage dành cho cặp đôi
            </p>
            <div className="flex justify-center mt-[20px]">
                <ReadMoreButton/>
            </div>
        </div>
     </div>
  )
}

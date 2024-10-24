import Link from "next/link";
import Image from 'next/image'
import ServiceImage from "@/images/service-1.png";
import { ReadMoreButton } from "@/components/common/ReadMoreButton/ReadMoreButton";

export const HeaderServiceCard = () => {
  return (
    <Link href="/details">
        <div className="w-full h-[144px] flex bg-white">
            <div className="w-[46%] md:w-[40%] shrink-0">
                <Image 
                    src={ServiceImage}
                    layout="responsive"
                    className='!w-full !h-full !object-cover object-bottom'
                    width={10}
                    height={10}
                    alt={'Thumbnail'}
                /> 
            </div>
            <div className="grow pt-[16px] md:pt-[28px] px-[24px] overflow-hidden">
                <p className="line-clamp-3 md:line-clamp-2 text-md font-semibold text-noto">
                    Liệu pháp Massage dành cho cặp đôi
                </p>
                <div className="mt-[16px] overflow-hidden">
                    <ReadMoreButton/>
                </div>
            </div>
        </div>
    </Link>
  )
}

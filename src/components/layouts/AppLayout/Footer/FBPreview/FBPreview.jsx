import Image from 'next/image'

export const FBPreview = () => {
  return (
    <div className='w-full md:max-w-[500px] bg-white cursor-pointer'>
        <div className='w-full px-[16px] pt-[12px] pb-[8px] flex justify-between gap-5'>
            <div className='h-[40px]'>
                <Image 
                    src={'/assets/images/fb_name.png'}
                    layout="responsive"
                    className='!w-full !h-full'
                    width={10}
                    height={10}
                    alt={'Thumbnail'}
                /> 
            </div>
            <div className='h-[22px]'>
                <Image 
                    src={'/assets/images/fb_like.jpg'}
                    layout="responsive"
                    className='!w-full !h-full'
                    width={10}
                    height={10}
                    alt={'Thumbnail'}
                /> 
            </div>
        </div>
        <div className='w-full'>
            <Image 
                src={'/assets/images/fb_banner.jpg'}
                layout="responsive"
                className='!w-full !h-full'
                width={10}
                height={10}
                alt={'Thumbnail'}
            /> 
        </div>
        <div className='w-full px-[16px] pt-[8px] pb-[14px]'>
            <p className='text-sm flex flex-wrap gap-1'>
                TRUNG TÂM MASSAGE EMO SPA|Website| <span>www.emospa.vn </span>
            </p>
        </div>
    </div>
  )
}

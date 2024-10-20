import Image from 'next/image'

export const DetailsGalleryCarouselCard = ({ src = '/assets/images/service_1.jpg' }) => {
  return (
    <div className="w-full px-1 md:px-3">
        <Image 
            src={src}
            layout="responsive"
            className='!w-full'
            width={10}
            height={10}
            alt={'Thumbnail'}
        />
    </div>
  )
}

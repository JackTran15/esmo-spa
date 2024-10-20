import React from 'react'
import Image from 'next/image'

export const ImageFull = ({ src, alt = 'Thumbnail' }) => {
    if(!src) return <></>

    return (
        <div className='w-full'>
            <Image 
                src={src}
                layout="responsive"
                width={10}
                height={10}
                alt={alt}
            />
        </div>
    )
}

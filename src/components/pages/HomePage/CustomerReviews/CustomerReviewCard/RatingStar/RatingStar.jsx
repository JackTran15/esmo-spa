import Image from 'next/image'

export const RatingStar = ({ star = 5 }) => {

    return (
        <div className="relative">
            <div className='w-full'>
                <div className='h-[20px] flex'>
                    {
                        Array(5).fill(0).map((_, index) => (
                            <Image 
                                key={index}
                                src={'/assets/icons/ic_star_inactive.svg'}
                                width={20}
                                height={20}
                                className="shrink-0"
                                alt={'Star icon'}
                            /> 
                        ))
                    }
                </div>
            </div>
            <div className='w-0 top-0 left-0 absolute overflow-hidden'style={{ width: `${star / 5 * 100}%`}}>
                <div className='h-[20px] flex'>
                    {
                        Array(5).fill(0).map((_, index) => (
                            <Image 
                                key={index}
                                src={'/assets/icons/ic_star_active.svg'}
                                width={20}
                                height={20}
                                className="shrink-0"
                                alt={'Star icon'}
                            /> 
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

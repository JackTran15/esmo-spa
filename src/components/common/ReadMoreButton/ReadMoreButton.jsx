import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'
import Image from "next/image"

export const ReadMoreButton = ({ className = '' }) => {

    const classNameCustom = cn("text-md gap-[8px] justify-start text-primary p-0 min-h-min", className)

    return (
        <Button variant="ghost" className={classNameCustom}>
            Tìm hiểu thêm
            <Image
                src={'/assets/icons/ic_arrow_right_primary.svg'}
                width={20}
                height={20}
                alt={'Home icon'}
            />  
        </Button>
    )
}

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'

export const ReadMoreButton = ({ className = '' }) => {

    const classNameCustom = cn("text-md justify-start text-primary p-0 min-h-min", className)

    return (
        <Button variant="ghost" className={classNameCustom}>
            Tìm hiểu thêm
        </Button>
    )
}

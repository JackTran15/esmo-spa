import { Button } from '@/components/ui/button'
import React from 'react'
import style from './GridArticle.module.css'
import { ArticleCard } from '../../ArticleCard/ArticleCard'

export const GridArticle = () => {
  return (
    <div className='w-full relative pb-[90px] md:pb-0'>
        <div className='w-full flex justify-between gap-5'>
            <div className='w-full'>
                <p className='text-title_3 font-semibold text-center md:text-left'>
                    Blog & Tư Vấn Làm Đẹp
                </p>
                <p className='text-lg mt-[16px] text-gray text-center md:text-left'>
                    Khám phá các bài viết chia sẻ về chăm sóc da, xu hướng làm đẹp, và lời khuyên từ các chuyên gia của chúng tôi.
                </p>
            </div>
            <Button className="shrink-0 w-full md:w-auto absolute md:relative bottom-0 md:bottom-none">
                Xem tất cả
            </Button>
        </div>
        <div className="w-full mt-[64px]">
            <div className={style.grid}>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
            </div>
        </div>
    </div>
  )
}

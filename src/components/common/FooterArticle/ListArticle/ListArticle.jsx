import { Button } from '@/components/ui/button'
import { ArticleCard } from "../../ArticleCard/ArticleCard"

export const ListArticle = () => {
  return (
    <div className='w-full relative pb-[90px] md:pb-0'>
        <div className='w-full'>
            <p className='text-title_3 font-semibold text-center'>
                Blog & Tư Vấn Làm Đẹp
            </p>
            <p className='text-lg mt-[16px] text-gray text-center'>
                Khám phá các bài viết chia sẻ về chăm sóc da, xu hướng làm đẹp, và lời khuyên từ các chuyên gia của chúng tôi.
            </p>
        </div>
        <div className="w-full grid md:grid-cols-3 mt-[64px] gap-[32px]">
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
        </div>
        <div className="w-full flex justify-center mt-[64px]">
            <Button className="w-full md:w-auto">
                Xem tất cả
            </Button>
        </div>
    </div>
  )
}

import { ArticleCard } from "@/components/common/ArticleCard/ArticleCard";
import { PaginationCustom } from "@/components/common/PaginationCustom/PaginationCustom";
import { RegisterNews } from "@/components/common/RegisterNews/RegisterNews";
import React, { Suspense } from "react";
import { HotArticles } from "./HotArticles/HotArticles";

export const NewsPage = () => {
  return (
    <div className="w-full container pb-[64px]">
      <div className="w-full py-[96px]">
        <p className="text-title_2 font-semibold">Tin tức & Khuyến mãi</p>
        <p className="w-full text-lg text-gray mt-[24px] max-w-[768px]">
          Khám phá các bài viết chia sẻ về chăm sóc da, xu hướng làm đẹp, và lời
          khuyên từ các chuyên gia của chúng tôi.
        </p>
      </div>

      <div className="w-full">
        <HotArticles />
      </div>

      {/* Blog & Tư Vấn Làm Đẹp */}
      <div className="w-full mt-[28px]">
        <div className="w-full max-w-[768px] mx-auto">
          <p className="text-center text-title_3 font-semibold">
            Blog & Tư Vấn Làm Đẹp
          </p>
          <p className="text-center mt-[16px] text-gray">
            Khám phá các bài viết chia sẻ về chăm sóc da, xu hướng làm đẹp, và
            lời khuyên từ các chuyên gia của chúng tôi.
          </p>
        </div>

        <div className="w-full mt-[64px] grid sm:grid-cols-2 md:grid-cols-3 gap-x-[32px] gap-y-[64px] pb-[64px]">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <PaginationCustom page={1} totalPages={9} />
        </Suspense>

        <div className="w-full mt-[64px] md:mt-[160px]">
          <RegisterNews />
        </div>
      </div>
    </div>
  );
};

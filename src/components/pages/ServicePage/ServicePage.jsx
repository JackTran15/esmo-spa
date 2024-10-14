import React from 'react'
import { ServiceCard } from './ServiceCard/ServiceCard'
import { ImageFull } from '@/components/common/ImageFull/ImageFull'
import { FooterArticle } from '@/components/common/FooterArticle/FooterArticle'

export const ServicePage = () => {

  const data = [
    {
      thumbnail: "/assets/images/service_1.jpg",
      title: "Liệu pháp massage cơ thể",
      description: "Massage cơ thể là một giải pháp rất hiệu quả để giảm stress và cải thiện sức khỏe tổng thể. Không chỉ giúp bạn thư giãn sau những giờ làm việc căng thẳng, massage còn có tác dụng tích cực trong việc nâng cao chất lượng giấc ngủ.",
      link: "#!"
    },
    {
      thumbnail: "/assets/images/service_2.jpg",
      title: "Liệu pháp massage đá nóng",
      description: "Cuộc sống hiện đại có nhiều áp lực khiến cơ thể dễ bị căng thẳng, mệt mỏi, đôi khi mất ngủ, và làn da thiếu sức sống. Hiện nay, EMO SPA xin giới thiệu đến các bạn dịch vụ massage đá nóng và tinh dầu để tái tạo năng lượng, phục hồi sức khỏe trẻ trung cho cơ thể.",
      link: "#!"
    },
    {
      thumbnail: "/assets/images/service_3.jpg",
      title: "Liệu pháp Massage chăm sóc da mặt",
      description: "Massage Facial tại EMO SPA giúp bạn có làn da khỏe mạnh, căng mịn và thoải mái với dịch vụ chất lượng cao và giá cả hợp lý. Hãy gọi ngay cho EMO SPA để được tư vấn về dịch vụ này!",
      link: "#!"
    },
    {
      thumbnail: "/assets/images/service_4.jpg",
      title: "Trải nghiệm Spa đa dạng dịch vụ",
      description: "Đây là gói massage kết hợp, spa dành riêng cho phái đẹp với các chương trình trị liệu chuyên môn cao và thời gian thực hiện hợp lý.",
      link: "#!"
    }
  ]

  return (
    <div className='container pt-[64px] pb-[96px]'>
      <div className='flex flex-col'>
        <div className='py-[64px]'>
          <ImageFull src={'/assets/images/service_top_banner.jpg'} />
        </div>
        {
          data.map((item, index) => (
            <ServiceCard
              isReverse={index % 2 === 0}
              key={index}
              thumbnail={item.thumbnail}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))
        }
        <div className='py-[64px]'>
          <ImageFull src={'/assets/images/service_bottom_banner.jpg'} />
        </div>
      </div>
      <div className='w-full mt-[64px] md:mt-[96px]'>
        <FooterArticle/>
      </div>
    </div>
  )
}

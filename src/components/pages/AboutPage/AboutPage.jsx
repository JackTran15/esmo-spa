import { FooterArticle } from '@/components/common/FooterArticle/FooterArticle'
import { RegisterNews } from '@/components/common/RegisterNews/RegisterNews'
import Image from 'next/image'
import Link from 'next/link'

export const AboutPage = () => {
  return (
    <div className="w-full pb-[64px]">
      <div className="w-full h-[504px] md:h-[604px] relative">
        <div className='absolute top-0 left-0 z-0 w-full h-full'>
          <Image 
              src={'/assets/images/about_banner.jpg'}
              layout="responsive"
              className='!w-full !h-full !object-cover object-bottom'
              width={10}
              height={10}
              alt={'Thumbnail'}
          /> 
        </div>
        <div className='container relative z-10 pt-[96px] w-full max-w-[768px] flex flex-col items-center'>
          <p className='text-title_3 md:text-title_2 font-semibold text-center text-white'>
            Khám Phá Thế Giới Spa Tại EmoSpa: Nơi Giao Thoa Giữa 
            Sức Khỏe và Sắc Đẹp
          </p>
          <div className='mt-[24px]'>
            <Image 
              src={'/assets/images/avatar.png'}
              className="rounded-full"
              width={40}
              height={40}
              alt={'Avatar'}
            /> 
          </div>
          <div className='flex items-center justify-center gap-[8px] mt-[18px]'>
            <p className='text-md font-semibold text-white' >Breanna Butler</p>
            <div className='h-[4px] w-[4px] rounded-full bg-white'></div>
            <p className='text-sm text-white'>Content Leader EmoSpa</p>
          </div>
        </div>
      </div>
      <div className='w-full px-5 md:px-0'>
        <div className='w-full container mt-[-64px] md:mb-[64px] pt-[64px] pb-[96px] bg-background relative z-10'>
          <div className='w-full md:px-32'>
            <p className='text-title_4 font-semibold'>Giới thiệu</p>
            <p className='mt-[20px] text-lg text-gray'>
              Chào mừng bạn đến với EmoSpa - thiên đường của sự thư giãn và chăm sóc sắc đẹp! Trong cuộc sống bận rộn ngày nay, việc chăm sóc bản thân không chỉ là một nhu cầu mà còn trở thành một phần không thể thiếu của chúng ta. EmoSpa là nơi mà bạn có thể tìm thấy khoảnh khắc bình yên và tươi mới giữa những bộn bề lo toan. Hãy cùng khám phá thế giới thú vị của spa và cách mà chúng tôi mang đến cho bạn những trải nghiệm tuyệt vời nhé!
            </p>
            <p className='text-xl text-gray mt-[20px] font-bold'>
              Spa - Hành Trình Giữa Các Thế Giới Chăm Sóc
            </p>
            <p className='mt-[20px] text-lg text-gray'>
              Với lịch sử lâu đời, spa bắt nguồn từ cái đẹp tự nhiên của nước và sự chữa lành thần kỳ từ những nguồn suối. Ngày nay, spa không chỉ đơn thuần là một nơi để tắm mà còn là không gian hoàn hảo để chúng ta thư giãn, chăm sóc sức khỏe và làm đẹp. Tại EmoSpa, chúng tôi luôn nỗ lực mang đến cho bạn những dịch vụ tốt nhất, giúp bạn phục hồi năng lượng và lấy lại tinh thần sảng khoái.
            </p>
            <div className='w-full mt-[48px]'>
              <Image 
                  src={'/assets/images/about_01.jpg'}
                  layout="responsive"
                  className='!w-full !h-full !object-cover object-bottom'
                  width={10}
                  height={10}
                  alt={'Thumbnail'}
              /> 
            </div>
            <p className='text-md text-gray mt-[16px]'>
              Hình ảnh bản quyền của EmoSpa
            </p>
            <p className='text-xl text-gray mt-[48px] font-bold'>
              Các Loại Hình Spa Đặc Sắc Tại Việt Nam
            </p>
            <p className='mt-[20px] text-lg text-gray'>
              EmoSpa hãnh diện cung cấp bốn loại hình spa chính, mỗi loại hình đều có nét độc đáo riêng:
            </p>
            <div className='w-full mt-[20px] flex flex-col gap-[20px]'>
              <div className='flex gap gap-[8px]'>
                <span className="shrink-0 text-lg text-gray font-semibold">
                  1.
                </span>
                <p className='text-lg text-gray'>
                  <b className='text-gray'>Day Spa:</b> Tại EmoSpa, chúng tôi hiểu rằng một ngày đẹp trời có thể bắt đầu bằng một trải nghiệm thư giãn. Với các liệu trình chăm sóc sức khỏe và sắc đẹp như massage, chăm sóc da mặt, bạn sẽ sớm cảm thấy như được nạp lại năng lượng và yêu đời hơn.
                </p>
              </div>
              <div className='flex gap gap-[8px]'>
                <span className="shrink-0 text-lg text-gray font-semibold">
                  2.
                </span>
                <p className='text-lg text-gray'>
                  <b className='text-gray'>Clinic Spa:</b> 
                  Kết hợp giữa spa và liệu pháp y tế, Clinic Spa tại EmoSpa đảm bảo rằng bạn không chỉ thư giãn mà còn nhận được sự chăm sóc hoàn hảo cho làn da và sức khỏe. Các chuyên gia y tế sẽ đồng hành cùng bạn trong hành trình chăm sóc bản thân.
                </p>
              </div>
              <div className='flex gap gap-[8px]'>
                <span className="shrink-0 text-lg text-gray font-semibold">
                  3.
                </span>
                <p className='text-lg text-gray'>
                  <b className='text-gray'>Home Spa:</b> 
                  Ngại khung giờ bận rộn? Đừng lo lắng! Dịch vụ Home Spa của EmoSpa sẽ mang trải nghiệm tuyệt vời tới tận nhà bạn. Đội ngũ nhân viên chuyên nghiệp sẽ đến tận nơi, tạo nên không gian thư giãn ngay giữa lòng tổ ấm của bạn.
                </p>
              </div>
              <div className='flex gap gap-[8px]'>
                <span className="shrink-0 text-lg text-gray font-semibold">
                  4.
                </span>
                <p className='text-lg text-gray'>
                  <b className='text-gray'>Beauty Spa:</b> Từ các liệu trình chăm sóc đặc biệt cho da đến tẩy tế bào chết, Beauty Spa tại EmoSpa là nơi lý tưởng cho những ai muốn nâng cao vẻ đẹp tự nhiên của bản thân. Chúng tôi hiểu rằng sức đẹp đến từ sự tự tin, và chúng tôi sẵn sàng giúp bạn tỏa sáng!
                </p>
              </div>
            </div>
          </div>
          <div className='w-full my-[72px]'>
            <Image 
                src={'/assets/images/about_02.jpg'}
                layout="responsive"
                className='!w-full !h-full !object-cover object-bottom'
                width={10}
                height={10}
                alt={'Thumbnail'}
            /> 
          </div>
          <div className='w-full md:px-32'>
            <p className='text-title_4 font-semibold mb-[16px]'>Tiêu Chí Để Trở Thành Spa Uy Tín</p>
            <p className='text-gray text-lg'>
              Khi tìm kiếm một spa, khách hàng thường quan tâm đến nhiều yếu tố để đảm bảo mình nhận được dịch vụ tốt nhất. Tại EmoSpa, chúng tôi cam kết mang đến cho bạn:
            </p>
            <ul className='list-disc list-inside'>
              <li className='text-gray text-lg'>
                Giấy phép hoạt động hợp pháp: Đến với EmoSpa, bạn hoàn toàn yên tâm về tính hợp pháp và uy tín của chúng tôi.
              </li>
              <li className='text-gray text-lg'>
                Chất lượng cơ sở vật chất: Không gian spa được thiết kế hiện đại và sang trọng, tạo cảm giác thư giãn ngay từ khi bạn bước vào.
              </li>
              <li className='text-gray text-lg'>
                Đội ngũ nhân viên chuyên nghiệp: Chúng tôi tự hào về đội ngũ nhân viên nhiệt tình, giàu kinh nghiệm và luôn sẵn sàng lắng nghe bạn.
              </li>
              <li className='text-gray text-lg'>
                Dịch vụ đa dạng: Tại EmoSpa, bạn có thể thoải mái lựa chọn các gói dịch vụ phù hợp với nhu cầu và sở thích cá nhân.
              </li>
            </ul>
            <p className='mt-[48px] text-title_4 font-semibold mb-[16px]'>Lợi Ích Khi Ghé Thăm Spa Thường Xuyên</p>
            <p className='text-gray text-lg'>
              Việc thường xuyên thăm spa không chỉ mang lại những khoảnh khắc thư giãn cho tâm hồn mà còn là những lợi ích tuyệt vời cho sức khỏe. Các liệu trình massage giúp kích thích tuần hoàn máu, giảm căng thẳng và hỗ trợ phục hồi cơ thể hiệu quả. Đặc biệt, với các dịch vụ chăm sóc da tại EmoSpa, bạn sẽ dễ dàng duy trì làn da khỏe mạnh, rạng rỡ và đầy sức sống.
            </p>
            <div className='w-full mt-[48px]'>
              <Image 
                  src={'/assets/images/about_03.jpg'}
                  layout="responsive"
                  className='!w-full !h-full !object-cover object-bottom'
                  width={10}
                  height={10}
                  alt={'Thumbnail'}
              /> 
            </div>
            <p className='text-md text-gray mt-[16px]'>
              Hình ảnh bản quyền của EmoSpa
            </p>
            <p className='mt-[48px] text-title_4 font-semibold mb-[16px]'>Kết Luận</p>
            <p className='text-gray text-lg'>
            EmoSpa không chỉ đơn thuần là một spa, mà còn là nơi để bạn tìm thấy sự chăm sóc tận tình và chuyên nghiệp. Hãy để EmoSpa đồng hành cùng bạn trên hành trình chăm sóc sức khỏe và sắc đẹp. Đến EmoSpa, bạn không chỉ được thư giãn và làm đẹp mà còn tìm thấy niềm vui và sự sáng tạo cho cuộc sống! Hãy đến và trải nghiệm ngay những điều tuyệt vời mà EmoSpa mang lại!
            </p>

            <div className='w-full flex justify-center mt-[48px] gap-[16px] pt-[24px] border-t border-gray-2'>
              <Link href={'#!'}>
                <Image 
                  src={'/assets/icons/ic_youtube_primary.svg'}
                  width={20}
                  height={20}
                  alt={'Youtube icon'}
                /> 
              </Link>
              <Link href={'#!'}>
                <Image 
                  src={'/assets/icons/ic_fb_primary.svg'}
                  width={20}
                  height={20}
                  alt={'Facebook icon'}
                /> 
              </Link>
              <Link href={'#!'}>
                <Image 
                  src={'/assets/icons/ic_insta_primary.svg'}
                  width={20}
                  height={20}
                  alt={'Instagram icon'}
                /> 
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='container py-[32px] md:py-[48px]'>
        <FooterArticle isListView={true} />
      </div>

      <div className='container mt-[64px]'>
        <RegisterNews/>
      </div>
    </div>
  )
}

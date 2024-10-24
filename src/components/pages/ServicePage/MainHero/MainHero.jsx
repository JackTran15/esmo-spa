import Link from "next/link";
import { Button } from "@/components/ui/button";

export const MainHero = () => {
  return (
    <div className="w-full max-w-[800px] mx-auto">
      <div className="text-title_4 md:text-title_1 md:text-center font-semibold text-noto">
        Thư Giãn Lãng Mạn Với Massage Tình Nhân Tại EMO SPA
      </div>
      <div className="text-lg text-gray mt-[16px] w-full md:max-w-[590px] mx-auto md:text-center">
      Dịch vụ Massage tình nhân tại EMO SPA luôn được cặp đôi ưa chuộng. Khách hàng sẽ được thư giãn trong không gian riêng tư lãng mạn dành cho 2 người. 
      </div>
      <div className="w-full flex flex-col md:flex-row mt-[24px] gap-[16px] justify-center">
        <Link href="/contact">
          <Button className="w-full md:w-auto">
            Đặt Lịch Ngay
          </Button>
        </Link>

        <Link href="/services">
          <Button className="w-full md:w-auto" variant='outline'>
            Xem Dịch Vụ
          </Button>
        </Link>
      </div>
    </div>
  );
};

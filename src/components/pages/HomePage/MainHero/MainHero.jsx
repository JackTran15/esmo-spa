import Link from "next/link";
import { Button } from "@/components/ui/button";

export const MainHero = () => {
  return (
    <div className="w-full max-w-[800px] mx-auto pt-[32px] md:pt-[48px]">
      <div className="text-title_4 md:text-title_1 md:text-center font-semibold">
        Trải Nghiệm Spa Thư Giãn Đẳng Cấp Tại EmoSpa
      </div>
      <div className="text-lg text-gray mt-[16px] w-full md:max-w-[590px] mx-auto md:text-center">
        Khám phá dịch vụ chăm sóc da và trị liệu thư giãn hoàn hảo tại Emospa -
        Nơi mang lại sự cân bằng cho tâm hồn và cơ thể bạn.
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

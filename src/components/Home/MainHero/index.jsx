import Link from "next/link";
import "./MainHero.css";

export const MainHero = () => {
  return (
    <div className="sub-container main-hero">
      <div className="text-noto title">
        Trải Nghiệm Spa Thư Giãn Đẳng Cấp Tại EmoSpa
      </div>
      <div className="description">
        Khám phá dịch vụ chăm sóc da và trị liệu thư giãn hoàn hảo tại Emospa -
        Nơi mang lại sự cân bằng cho tâm hồn và cơ thể bạn.
      </div>
      <div className="cta">
        <Link className="btn btn-primary" href="#">
          Đặt Lịch Ngay
        </Link>

        <Link className="btn btn-secondary" href="#">
          Xem Dịch Vụ
        </Link>
      </div>
    </div>
  );
};

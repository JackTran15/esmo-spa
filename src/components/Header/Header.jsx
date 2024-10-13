import Image from "next/image";
import Logo from "@/images/logo.png";
import "./Header.css";
import Link from "next/link";

import { ChevronDownIcon } from "@/icons";
import ServiceImage from "@/images/service-1.png";

export const Header = () => {
  return (
    <div className="main-container main-menu-container">
      <div id="main-menu" className="main-menu">
        <input type="checkbox" id="show-menu-checker" hidden />
        <div className="logo-container">
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>
          <label className="menu-toggle" for="show-menu-checker">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </label>
        </div>

        <ul className="main-nav">
          <li className="nav-item nav-item-has-dropdown">
            <input type="checkbox" id="service-dropdown-checker" hidden />
            <label className="nav-item-title" for="service-dropdown-checker">
              <div>Dịch vụ</div>
              <div className="dropdown">
                <ChevronDownIcon />
              </div>
            </label>
            <div className="nav-item-services">
              <h3 className="nav-item-service-title text-noto">
                Dịch vụ nổi bật tại EmoSpa
              </h3>

              <div className="nav-item-services-grid">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div className="card" key={index}>
                    <div className="card-image">
                      <Image src={ServiceImage} alt="service" />
                    </div>
                    <div className="card-content">
                      <h4 className="card-title text-noto">
                        Liệu pháp Massage dành cho cặp đôi
                      </h4>
                      <div className="card-link">
                        <Link href="#">Tìm hiểu thêm</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-item-title" href="#">
              Về Emospa
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item-title" href="#">
              Tin tức & Khuyến mãi
            </Link>
          </li>
        </ul>

        <div className="cta-wrapper">
          <Link className="cta" href="#">
            <div>Đặt lịch ngay</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

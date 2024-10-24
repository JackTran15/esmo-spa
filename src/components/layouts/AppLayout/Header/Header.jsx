import Image from "next/image";
import Logo from "@/images/logo.png";
import "./Header.css";
import Link from "next/link";

import { ChevronDownIcon } from "@/icons";
import { Button } from "@/components/ui/button";
import { HeaderServiceCard } from "./HeaderServiceCard/HeaderServiceCard";

export const Header = () => {
  return (
    <div className="main-menu-container-wrapper">
       <div className="container main-menu-container">
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
                Dịch vụ
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
                    <HeaderServiceCard  key={index} />
                  ))}
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-item-title" href="/about">
                Về Emospa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-item-title" href="/news">
                Tin tức & Khuyến mãi
              </Link>
            </li>
          </ul>

          <div className="cta-wrapper">
            <Link href={'/contact'} className="w-full md:w-auto">
              <Button className="w-full" size="headerButton">
                Đặt lịch ngay
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

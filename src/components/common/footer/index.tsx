import Link from "next/link";
import "../../../../public/font/font.css";

import Icon from "../icon";

const link = (text: string, href: string) => (
  <Link className="mx-[2px] text-gray-5 " href={href}>
    {text}
  </Link>
);

function Footer() {
  return (
    <div className="bg-gray-11 py-[37px] px-[16px]">
      <Icon name="booknook" />
      <div className="text-xs mb-[24px] text-gray-5">
        내 취향에 맞는 독립서점과 서점에서 운영하는 커뮤니티/프로그램 정보를
        제공하는 서비스
      </div>
      <div className="flex text-xs mb-[12px]">
        <div>contents</div>
        <div className="flex">
          {link("서점", "")}
          {link("취향 테스트", "")}
        </div>
      </div>
      <div className="flex text-xs">
        <div>Support</div>
        <div>
          {link("AboutUs", "")}
          {link("제보하기", "")}
          {link("이용약관", "")}
          {link("개인정보처리방침", "")}
        </div>
      </div>
    </div>
  );
}

export default Footer;

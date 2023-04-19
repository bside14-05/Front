import Link from "next/link";

function Footer() {
  return (
    <div>
      <div>Book Nook</div>
      <div>
        내 취향에 맞는 독립서점과 서점에서 운영하는 커뮤니티/프로그램 정보를
        제공하는 서비스
      </div>
      <div>
        <div>contents</div>
        <div className="flex">
          <Link href="">서점</Link>
          <Link href="">취향 테스트</Link>
        </div>
      </div>
      <div>
        <div>Support</div>
        <div>
          <Link href="">About us</Link>
          <Link href="">제보하기</Link>
          <Link href="">이용약관</Link>
          <Link href="">개인정보 처리방침</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;

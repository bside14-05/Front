import Modal from "@/components/template/Modal";
import { PATH_MENU } from "@/paths/path";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface LNBProps {
  onClose: () => void;
}

export default function LNB({ onClose }: LNBProps) {
  const { push } = useRouter();

  const toUrl = (url: string) => {
    push(url);
  };
  return (
    <Modal onClose={onClose} isFull>
      <main className="px-9 mt-4">
        <div className="mb-9">
          <Image
            src="/images/logo2.png"
            alt="logo image"
            width={144}
            height={104}
          />
        </div>

        <p className="mb-6" onClick={() => toUrl(PATH_MENU.my.main)}>
          로그인/회원가입 &gt;{" "}
        </p>

        <hr className="bg-[#212121] h-px border-0" />

        <ul className="my-10 flex flex-col gap-6">
          <li className="py-2">
            <Link href="/" className="text-[#212121]">
              <span className="mr-2 text-2xl">Home</span>
              <span>홈</span>
            </Link>
          </li>
          <li className="py-2">
            <Link href="/bookstore" className="text-[#212121]">
              <span className="mr-2 text-2xl">Book store</span>
              <span>서점</span>
            </Link>
          </li>
          <li className="py-2">
            <Link href="/" className="text-[#212121]">
              <span className="mr-2 text-2xl">Mood test</span>
              <span>취향 테스트</span>
            </Link>
          </li>
        </ul>

        <hr className="bg-[#212121] border-dashed mb-10" />

        <span className="py-3">서점 제보하기</span>
      </main>
    </Modal>
  );
}

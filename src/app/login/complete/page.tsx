import Button from "@/components/common/button";
import Image from "next/image";
import Link from "next/link";

export default function LoginCompletePage() {
  return (
    <section className="h-full flex flex-col justify-center px-4 gap-6">
      <div className="grow py-20 flex flex-col justify-center">
        <div className="bg-[#E1E1E1]/20 w-full h-48 flex justify-center items-center mb-4">
          <Image
            src="/images/logo.png"
            alt="logo image"
            width={200}
            height={200}
          />
        </div>

        <p className="text-center">
          환영합니다. Book Nook와 함께 <br /> 책이 있는 당신만의 작은 공간을
          채워보세요.
        </p>
      </div>

      <div className="py-10 flex flex-col justify-center items-center gap-4">
        <Button type="normal">서점 취향 알아보기</Button>

        <Link href="/" className="px-4 py-2 rounded-full">
          <span className="text-[#A5A5A5] text-sm underline underline-offset-[3px]">
            홈 화면으로 이동
          </span>
        </Link>
      </div>
    </section>
  );
}

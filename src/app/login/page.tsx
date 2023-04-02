import Button from "@/components/common/button";
import Icon from "@/components/common/icon";
import Image from "next/image";

function LoginPage() {
  return (
    <section className="h-full flex flex-col justify-center items-cente px-4 gap-6 -mt-10">
      <div className="bg-[#E1E1E1] w-full h-48 flex justify-center items-center">
        <Image
          src="/images/logo.png"
          alt="logo image"
          width={200}
          height={200}
        />
      </div>

      <Button
        type="normal"
        className="flex justify-center items-center gap-2 bg-[#FEE500] text-black rounded-lg"
      >
        <Icon name="kakao" />
        카카오 로그인
      </Button>
    </section>
  );
}

export default LoginPage;

import Icon from "@/components/common/icon";
import { cn } from "@/lib/utils";
import Image from "next/image";

// interface CardProps {
//   idx: number;
// }

export default function Card() {
  return (
    <article className="h-[300px] border-b odd:pr-2">
      <div className="flex justify-center items-center h-[168px] bg-[#E1E1E1]/20 mb-4">
        <Image src="/images/logo.png" alt="logo" width={168} height={168} />
      </div>

      <div className="flex justify-between h-[50px]">
        <h2 className="basis-10/12 text-lg min-w-0 line-clamp-2 leading-6">
          사장님 한 마디
        </h2>
        <div className="basis-2/12 flex justify-end pr-1">
          <Icon name="bookmarkFill" />
        </div>
      </div>

      <p className="text-sm text-[#666666]">서점 이름</p>
      <p className="text-sm text-[#666666]">서울시 중구</p>
    </article>
  );
}

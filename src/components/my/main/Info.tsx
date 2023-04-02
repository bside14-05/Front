import Button from "@/components/common/button";

function Info() {
  return (
    <>
      <div className="mb-2">취향정보</div>
      <div className="flex justify-center items-center h-[112px] mb-2 border-2">
        <div className="p-4 bg-slate-400">
          <div className="h-[42px] w-[42px] bg-black"></div>
        </div>
      </div>
      <div className="w-full">
        <Button type="normal">취향 테스트 하러가기</Button>
      </div>
    </>
  );
}

export default Info;

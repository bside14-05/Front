import Header from "@/components/template/Header";

export default function BookStorePage() {
  return (
    <>
      <Header />
      <section className="h-full px-4 mt-8">
        <h1 className="text-4xl font-light mb-7">Book Store</h1>

        <div className="bg-[#E1E1E1]/20 w-full h-36 flex justify-center items-center">
          태그 영역
        </div>

        <div>필터 영역</div>
        <div>서점 리스트 카드 영역</div>
      </section>
    </>
  );
}

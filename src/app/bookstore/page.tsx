import Footer from "@/components/my/Footer";
import Card from "@/components/template/Card";
import Header from "@/components/template/Header";

export default function BookStorePage() {
  return (
    <>
      <Header />
      <div className="h-full mt-8">
        <h1 className="px-4 text-4xl font-light mb-10">Book Store</h1>

        <ul className="px-4 flex justify-between border-b border-[#D9D9D9] text-[#717478] mb-3">
          <li className="pb-4 text-[#191919] font-bold">전체</li>
          <li className="pb-4">커피/술</li>
          <li className="pb-4">예술/전시</li>
          <li className="pb-4">굿즈/소품</li>
          <li className="pb-4">프로그램</li>
        </ul>

        <div className="bg-[#E1E1E1]/20 w-full h-10 flex justify-center items-center mb-5">
          태그 영역
        </div>

        <section className="px-4 grid grid-cols-2 gap-y-7">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Card key={item} />
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
}

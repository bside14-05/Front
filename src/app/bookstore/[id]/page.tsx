import Button from "@/components/common/button";
import Icon from "@/components/common/icon";
import Card from "@/components/template/Card";
import Image from "next/image";

interface BookStoreProps {
  params: { id: number };
}

export default function BookStorePage({ params: { id } }: BookStoreProps) {
  // console.log("bookstoreId", id);

  return (
    <section>
      <div className="mx-4 mb-4 flex justify-center items-center h-[380px] bg-[#E1E1E1]/20 ">
        <Image src="/images/logo.png" alt="logo" width={168} height={380} />
      </div>

      <div className="flex mb-7 sticky top-[72px]">
        <div className="flex-1 px-4 py-2 bg-black text-white text-xs menu-vertical-bar [&>*:not(:last-child)]:after:bg-white">
          <span>커피/술</span>
          <span>굿즈/소품</span>
          <span>프로그램</span>
        </div>
        <div className="flex-1 px-4 py-2 bg-gray-10 text-xs menu-vertical-bar [&>*:not(:last-child)]:after:bg-gray-5">
          <span>독립출판</span>
          <span>해외서적</span>
        </div>
      </div>

      <article>
        <div className="px-4 sticky top-[104px] flex justify-between items-center bg-white mb-4">
          <h2 className="text-2xl">스페인 책방</h2>
          <div>
            <Icon
              name="bookmarkFill"
              width={24}
              height={24}
              viewBox="0 0 18 18"
            />
          </div>
        </div>

        <div className="px-4 flex flex-col gap-4">
          <div>
            <p className="text-left">&ldquo;</p>
            <p className="text-center">충무로의 작은 책방, 취향을 잡다.</p>
            <p className="text-right">&rdquo;</p>
          </div>

          <div className="flex gap-2 text-sm mb-14">
            <div className="px-3 py-[10px] flex justify-between items-center gap-7 border border-gray-9">
              <span>#와인</span>
              <Icon name="rightArrow" />
            </div>
            <div className="px-3 py-[10px] flex justify-between items-center gap-7 border border-gray-9">
              <span>#기념품</span>
              <Icon name="rightArrow" />
            </div>
            <div className="px-3 py-[10px] flex justify-between items-center gap-7 border border-gray-9">
              <span>#헌책</span>
              <Icon name="rightArrow" />
            </div>
          </div>
        </div>

        <hr />

        <div className="flex flex-col gap-[60px] px-4 my-10">
          <div>
            <h2 className="font-CelloGX text-xl mb-6 ">Connect.</h2>
            <table className="w-full text-xs">
              <tbody>
                <tr className="border-b border-black dark:border-gray-700 h-9">
                  <th className="text-left">SNS</th>
                  <td className="text-right">Instagram</td>
                  <td className="text-right">@book_spain</td>
                </tr>
                <tr className="border-b border-gray-10 dark:border-gray-700 h-9">
                  <th className="text-left"></th>
                  <td className="text-right">Naver Blog</td>
                  <td className="text-right">1412asa</td>
                </tr>
                <tr className="border-b border-black dark:border-gray-700 h-9">
                  <th className="text-left"></th>
                  <td className="text-right">Facebok</td>
                  <td className="text-right">@abdc</td>
                </tr>

                <tr className="border-b border-black dark:border-gray-700 h-9">
                  <th className="text-left">Website</th>
                  <td colSpan={2} className="text-right">
                    abcd.co.kr
                  </td>
                </tr>
                <tr className="border-b border-black dark:border-gray-700 h-9">
                  <th className="text-left">연락처</th>
                  <td colSpan={2} className="text-right">
                    070-1234-5678
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h2 className="font-CelloGX text-xl mb-6">Info.</h2>
            <table className="w-full text-xs">
              <tbody>
                <tr className="border-b border-black dark:border-gray-700 h-9">
                  <th className="text-left font-semibold">주소</th>
                  <td className="text-right">서울시 마포구 연남동 122-3</td>
                </tr>
                <tr className="border-b border-black dark:border-gray-700 h-8">
                  <th className="text-left font-semibold">영업일</th>
                  <td className="text-right">
                    <span className="font-bold mr-1">월</span>
                    <span className="inline-block min-w-[130px]">
                      오전 11:00 - 오후 04:00
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-10 dark:border-gray-700 h-9">
                  <th className="text-left"></th>
                  <td className="text-right">
                    <span className="font-bold mr-1">화</span>
                    <span className="inline-block min-w-[130px]">
                      오전 11:00 - 오후 04:00
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-10 dark:border-gray-700 h-9">
                  <th className="text-left"></th>
                  <td className="text-right">
                    <span className="font-bold text-gray-7 mr-1">수</span>
                    <span className="inline-block min-w-[130px]">휴무</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-10 dark:border-gray-700 h-9">
                  <th className="text-left"></th>
                  <td className="text-right">
                    <span className="font-bold text-gray-7 mr-1">목</span>
                    <span className="inline-block min-w-[130px]">휴무</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-10 dark:border-gray-700 h-9">
                  <th className="text-left"></th>
                  <td className="text-right">
                    <span className="font-bold mr-1">금</span>
                    <span className="inline-block min-w-[130px]">
                      오전 11:00 - 오후 04:00
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-10 dark:border-gray-700 h-9">
                  <th className="text-left"></th>
                  <td className="text-right">
                    <span className="font-bold mr-1">토</span>
                    <span className="inline-block min-w-[130px]">
                      오전 11:00 - 오후 04:00
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-black dark:border-gray-700 h-9">
                  <th className="text-left"></th>
                  <td className="text-right">
                    <span className="font-bold mr-1">일</span>
                    <span className="inline-block min-w-[130px]">
                      오전 11:00 - 오후 04:00
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-CelloGX text-xl tracking-[0.1px] mb-1">
                Program Info.
              </h2>
              <h4 className="text-gray-5">이 서점에서 운영중인 프로그램</h4>
            </div>
            <div className="flex gap-2 text-sm">
              <div className="px-3 py-[10px] flex justify-between items-center gap-7 border border-gray-9">
                <span>#와인</span>
              </div>
              <div className="px-3 py-[10px] flex justify-between items-center gap-7 border border-gray-9">
                <span>#기념품</span>
              </div>
              <div className="px-3 py-[10px] flex justify-between items-center gap-7 border border-gray-9">
                <span>#헌책</span>
              </div>
            </div>
            <Button type="normal">자세히 보기</Button>
          </div>

          <div>
            <div className="mb-[30px]">
              <h2 className="font-CelloGX text-xl tracking-[0.1px] mb-1">
                Other Book Stores.
              </h2>
              <h4 className="text-gray-5">이런 서점은 어때요?</h4>
            </div>

            <div className="grid grid-cols-2 gap-y-7">
              {[1, 2, 3, 4].map((item) => (
                <Card key={item} id={item} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

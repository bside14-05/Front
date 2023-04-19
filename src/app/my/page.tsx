"use client";

import React from "react";
import dynamic from "next/dynamic";

import Footer from "@/components/my/Footer";
import Header from "@/components/my/Header";
import UserInfo from "@/components/linkList/userInfo";

const LIST = [
  { id: 0, title: "서점", adress: "00시 00구" },
  { id: 1, title: "서점2", adress: "00시 00구2" },
];

const Info = dynamic(() => import("@/components/my/main/Info"), {
  ssr: false,
});

const LikeList = dynamic(() => import("@/components/my/main/LikeList"), {
  ssr: false,
});

function My() {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return <></>;
  return (
    <div className="sm:w-full md:w-[768px] mx-auto [calc(100vh-50px)]-h-max px-[16px]">
      <Header />
      <UserInfo />
      <section className="w-full mb-4">
        <Info />
      </section>
      <section className="mb-4">
        <div className="mb-2 text-base ">찜목록</div>
        <div className="mb-2">
          <LikeList
            list={LIST}
            category={"서점"}
            emptyText={"서점 찜하러 가기"}
          />
        </div>
        <div>
          <LikeList
            list={LIST}
            category={"프로그램"}
            emptyText={"프로그램 찜하러 가기"}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default My;

"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

import Footer from "@/components/common/footer";
import UserInfo from "@/components/linkList/UserInfo";
import Lnb from "@/components/lnb";
import Header from "@/components/template/Header";
import ExitModal from "@/components/my/modal/ExitModal";
import { PATH_MENU } from "@/paths/path";

const LIST = [
  { id: 0, title: "서점", adress: "00시 00구" },
  { id: 1, title: "서점2", adress: "00시 00구2" },
];

const ONE_LIST = [{ id: 0, title: "서점", adress: "00시 00구" }];

const Info = dynamic(() => import("@/components/my/main/Info"), {
  ssr: false,
});

const LikeList = dynamic(() => import("@/components/my/main/LikeList"), {
  ssr: false,
});

function My() {
  const [hydrated, setHydrated] = React.useState(false);
  const [isLNBVisible, setIsLNBVisible] = useState(false);
  const [quitModal, setQuitModal] = useState(false);

  const handleClick = (status: boolean) => {
    setIsLNBVisible(status);
  };

  const handleModal = () => {
    setQuitModal((prev) => !prev);
  };

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return <></>;
  return (
    <>
      <Header onLNBOpen={() => handleClick(true)} />
      <div className="sm:w-full md:w-[768px] mx-auto [calc(100vh-50px)]-h-max px-[16px] font-Pretendard">
        <UserInfo />
        {/* <section className="w-full mb-4">
          <Info />
        </section> */}
        <section className="mb-[47px]">
          <div className="mb-2 text-base">찜목록</div>
          <div className="mb-2">
            <LikeList
              list={LIST}
              toUrl={PATH_MENU.my.like}
              category={"서점"}
              emptyText={"서점 찜하러 가기"}
            />
          </div>
          <div>
            <LikeList
              list={ONE_LIST}
              toUrl={PATH_MENU.my.like}
              category={"프로그램"}
              emptyText={"프로그램 찜하러 가기"}
            />
          </div>
        </section>
        <section className="mb-[80px]">
          <div className="decoration-gray-8 underline text-gray-8 mb-[8px] py-[8px]">
            <div className="w-fit cursor-pointer">로그아웃</div>
          </div>
          <div className="decoration-gray-8  underline text-gray-8 py-[8px]">
            <div className="w-fit cursor-pointer" onClick={() => handleModal()}>
              회원탈퇴
            </div>
          </div>
        </section>
      </div>
      <Footer />
      {isLNBVisible && <Lnb onClose={() => handleClick(false)} />}
      {quitModal && <ExitModal onClose={() => handleModal()} />}
    </>
  );
}

export default My;

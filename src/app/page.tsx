"use client";

import React from "react";

import Footer from "@/components/my/Footer";
import Header from "@/components/my/Header";
import LikeList from "@/components/my/main/LikeList";

import { PATH_MENU } from "@/paths/path";
import { useRouter } from "next/navigation";
import NavMenu from "@/components/main/NavMenu";
import Card from "@/components/main/Card";
import Filter from "@/components/main/Filter";

const LIST = [
  { id: 0, title: "서점", adress: "00시 00구" },
  { id: 1, title: "서점2", adress: "00시 00구2" },
];

function Main() {
  const [hydrated, setHydrated] = React.useState(false);

  const router = useRouter();

  const handleClick = () => {
    router.push(PATH_MENU.my.main);
  };

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return <></>;

  return (
    <div className="sm:w-full md:w-[768px] mx-auto [calc(100vh-50px)]-h-max px-[16px]">
      <div className="flex items-center h-[50px]">Book Nook</div>
      <div className=" h-full m-auto">
        <div className="relative">
          <div className="relative bg-black z-20 h-[68px] w-1/2 mb-[-42px] text-white p-[12px] ">
            <div className="text-sm">{"여행의 순간을 담은 지민의 공간"}</div>
          </div>
          <div className="relative flex h-[178px] z-10 w-full">
            <div className="relative w-2/5">
              <div className="absolute bottom-0">
                <div>adress</div>
                <div className="text-[19px]">{"title -->"}</div>
              </div>
            </div>
            <div className="bg-yellow-200 w-3/5"></div>
          </div>
        </div>
        <div className="flex justify-center h-[50px]">ㅡ ㅡ ㅡ</div>
        <Filter />
        <div className="flex flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <NavMenu />
    </div>
  );
}

export default Main;

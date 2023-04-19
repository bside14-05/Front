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
      <div className=" h-[184px] w-full bg-gray-300"></div>
      <div className=" h-full m-auto">
        <div className="flex justify-center items-center h-[118px]">
          <div className="border-b-2 border-black">book store</div>
        </div>
        <div className="flex justify-center">
          <div className="m-[4px]">
            <div className="bg-gray-400 h-[220px] w-[167px] mb-[10px]"></div>
            <div className="bg-gray-400 h-[167px] w-[167px]"></div>
          </div>
          <div className="m-[4px]">
            <div className="bg-gray-400 h-[167px] w-[167px] mb-[10px] "></div>
            <div className="bg-gray-400 h-[220px] w-[167px]"></div>
          </div>
        </div>
        <div className="bg-slate-500 h-[160px]">footer</div>
      </div>
    </div>
  );
}

export default Main;

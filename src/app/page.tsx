"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";

import { PATH_MENU } from "@/paths/path";

import Button from "@/components/common/button";
import Icon from "@/components/common/icon";
import Footer from "@/components/common/footer";
import Header from "@/components/template/Header";
import Lnb from "@/components/lnb";

function Main() {
  const [hydrated, setHydrated] = React.useState(false);

  const [isLNBVisible, setIsLNBVisible] = useState(false);

  const router = useRouter();
  const handleHeaderClick = (status: boolean) => {
    setIsLNBVisible(status);
  };

  const handleClick = (moveUrl: string) => {
    router.push(PATH_MENU.my.main + `? + ${moveUrl}`);
  };

  const menuCard = (text: string, title: string, moveUrl: string) => {
    return (
      <div className="relative w-1/2 text-sm pb-[16px] pt-[52px] px-[16px] order-b-[1px] border-black">
        <p className="absolute top-[24px] whitespace-pre-wrap z-10 text-2xl">
          {title}
        </p>
        <div className="h-[180px] w-[155px] border-black border-[1px] mb-[12px] z-0"></div>
        <div className="flex items-center justify-between">
          <div onClick={() => handleClick(moveUrl)}>{text}</div>
          <Icon name={"circleInArrow"}></Icon>
        </div>
      </div>
    );
  };

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return <></>;
  return (
    <>
      <Header onLNBOpen={() => handleHeaderClick(true)} />
      <div
        className={`sm:w-full md:w-[768px] mx-auto [calc(100vh-50px)]-h-max`}
      >
        <div className="flex justify-center items-center h-[226px]">
          <Icon name="mainLogo" />
        </div>
        <div
          className={`sticky top-[72px] py-[12px] border-y-[1px] border-black font-CelloGX text-xl bg-white z-20`}
        >
          <div className={`px-[16px] bg-white font-CelloGX`}>
            Book store with
          </div>
        </div>
        <div>
          <div className="border-t-[1px] border-black">
            <div className="flex border-b-[1px] border-black">
              {menuCard(
                "커피 혹은 술과 함께",
                `Coffee /\nAlcohol-beverage`,
                ""
              )}
              <div className="border-l border-black"></div>
              {menuCard("예술 혹은 전시가 있는", `Art /\nExhibition`, "")}
            </div>
            <div className="flex border-b-[1px] border-black">
              {menuCard("굿즈/소품이 있는", "Goods", "")}
              <div className="border-l border-black"></div>
              {menuCard("프로그램과 함께", "Programs", "")}
            </div>
          </div>
        </div>
        <div className="px-[16px] mt-[24px] mb-[80px]">
          <Button type="normal">And more</Button>
        </div>
      </div>
      <Footer />
      {isLNBVisible && <Lnb onClose={() => handleHeaderClick(false)} />}
    </>
  );
}

export default Main;

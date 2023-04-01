"use client";

import React from "react";

import Footer from "@/components/my/Footer";
import Header from "@/components/my/Header";
import LikeList from "@/components/my/main/LikeList";

import { PATH_MENU } from "@/paths/path";
import { useRouter } from "next/navigation";

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
      <Header />
      <div className="h-48 bg-black" onClick={handleClick}></div>
      <div>
        <LikeList category="찜한 서점" list={LIST} />
      </div>
      <div>
        <LikeList category="찜한 프로그램" list={LIST} />
      </div>
      <div>
        <LikeList category="서점" list={LIST} />
      </div>
      <Footer />
    </div>
  );
}

export default Main;

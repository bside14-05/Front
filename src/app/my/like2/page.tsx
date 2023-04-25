"use client";

import React, { useState } from "react";
import LNB from "@/components/lnb";
import List from "@/components/linkList/List";
import UserInfo from "@/components/linkList/UserInfo";
import Footer from "@/components/common/footer";
import Header from "@/components/template/Header";

const LIST = [
  { id: 0, name: "서점", adress: "00시 00구", like: true },
  { id: 1, name: "서점2", adress: "00시 00구2", like: true },
  { id: 3, name: "서점", adress: "00시 00구", like: true },
  { id: 4, name: "서점2", adress: "00시 00구2", like: true },
  { id: 5, name: "서점", adress: "00시 00구", like: true },
  { id: 6, name: "서점2", adress: "00시 00구2", like: true },
  { id: 7, name: "서점", adress: "00시 00구", like: true },
  { id: 8, name: "서점2", adress: "00시 00구2", like: true },
  { id: 9, name: "서점", adress: "00시 00구", like: true },
  { id: 10, name: "서점2", adress: "00시 00구2", like: true },
];

function LikePage() {
  const [hydrated, setHydrated] = React.useState(false);

  const [isLNBVisible, setIsLNBVisible] = useState(false);

  const handleClick = (status: boolean) => {
    setIsLNBVisible(status);
  };

  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return <></>;

  return (
    <>
      <Header onLNBOpen={() => handleClick(true)} />
      <div className="sm:w-full md:w-[768px] mx-auto [calc(100vh-50px)]-h-max px-[16px]">
        <UserInfo />
        <section className="w-full mb-4">
          <div className="mb-[16px]">
            찜목록 <span className="font-bold">{LIST.length}</span>
          </div>
          <List list={LIST} />
        </section>
      </div>
      {isLNBVisible && <LNB onClose={() => handleClick(false)} />}
      <Footer />
    </>
  );
}

export default LikePage;

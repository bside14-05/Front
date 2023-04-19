"use client";

import React from "react";

import Footer from "@/components/my/Footer";
import Header from "@/components/my/Header";
import List from "@/components/linkList/List";
import UserInfo from "@/components/linkList/userInfo";

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
  React.useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return <></>;
  return (
    <div className="sm:w-full md:w-[768px] mx-auto [calc(100vh-50px)]-h-max px-[16px]">
      <Header />
      <UserInfo />
      <section className="w-full mb-4">
        <div>찜 목록 : {LIST.length}</div>
        <List list={LIST} />
      </section>
      <Footer />
    </div>
  );
}

export default LikePage;

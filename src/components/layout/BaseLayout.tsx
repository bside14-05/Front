"use client";

import { useState } from "react";
import LNB from "@/components/lnb";
import Footer from "@/components/common/footer";
import Header from "@/components/template/Header";

/**
 * 기본 레이아웃 - 해더, 푸터가 있는 형태의 레이아웃
 */
export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLNBVisible, setIsLNBVisible] = useState(false);

  return (
    <>
      <Header onLNBOpen={() => setIsLNBVisible(true)} />
      <main className="min-h-screen max-w-screen-md mx-auto">{children}</main>
      <Footer />

      {isLNBVisible && <LNB onClose={() => setIsLNBVisible(false)} />}
    </>
  );
}

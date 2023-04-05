"use client";

import Button from "@/components/common/button";
import Checkbox from "@/components/common/checkbox";
import Modal from "@/components/common/modal";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function LoginAgreePage() {
  const [checkedAll, setCheckedAll] = useState(false);

  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);

  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (checkedOne && checkedTwo) setCheckedAll(true);
    if (!checkedOne || !checkedTwo) setCheckedAll(false);
  }, [checkedOne, checkedTwo]);

  return (
    <section className="h-full flex flex-col justify-between px-4 -mt-10">
      <div className="grow flex items-center">
        <div className="bg-[#E1E1E1]/20 w-full h-48 flex justify-center items-center my-28">
          <Image
            src="/images/logo.png"
            alt="logo image"
            width={200}
            height={200}
          />
        </div>
      </div>

      <div>
        <div className="px-4 pt-6 mb-12 border-t border-black">
          <div className="pb-4">
            <Checkbox
              checked={checkedAll}
              onToggle={() => {
                if (checkedAll) {
                  setCheckedOne(false);
                  setCheckedTwo(false);
                } else {
                  setCheckedOne(true);
                  setCheckedTwo(true);
                }
                setCheckedAll(!checkedAll);
              }}
              text="전체 동의하기"
              size="md"
            />
          </div>

          <div className="p-4 flex flex-col gap-2 border-t">
            <Checkbox
              checked={checkedOne}
              onToggle={() => {
                setCheckedOne(!checkedOne);
              }}
              text={[
                "[필수] ",
                <Link href="#" key="1">
                  <p className="inline underline underline-offset-[3px]">
                    이용약관
                  </p>
                </Link>,
                "과 ",
                <Link href="#" key="2">
                  <p className="inline underline underline-offset-[3px]">
                    개인정보 처리방침
                  </p>
                </Link>,
                "에 동의합니다.",
              ]}
              size="sm"
            />
            <Checkbox
              checked={checkedTwo}
              onToggle={() => {
                setCheckedTwo(!checkedTwo);
              }}
              text="[선택] 마케팅 정보를 수신하겠습니다."
              size="sm"
            />
          </div>
        </div>

        <Button type="normal" onClick={() => setModal(!modal)}>
          완료
        </Button>
      </div>

      {modal && <Modal visible={modal} onClose={() => setModal(!modal)} />}
    </section>
  );
}

export default LoginAgreePage;

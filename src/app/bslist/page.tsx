"use client";
import { useState } from "react";
import Card from "@/components/template/Card";
import {
  ArrayBottomSheet,
  FilterBottomSheet,
} from "@/components/bookstore/BottomSheet";
import Icon from "@/components/common/icon";

export default function BSListPage() {
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [orderModalVisible, setOrderModalVisible] = useState(false);

  return (
    <>
      <div className="h-full mt-8">
        <h1 className="font-CelloGX font-thin text-4xl px-4 mb-10">
          Book Store
        </h1>

        <ul className="px-4 flex justify-between border-b border-[#D9D9D9] text-[#717478] mb-3">
          <li className="pb-4 text-[#191919] font-bold">전체</li>
          <li className="pb-4">커피/술</li>
          <li className="pb-4">예술/전시</li>
          <li className="pb-4">굿즈/소품</li>
          <li className="pb-4">프로그램</li>
        </ul>

        <div className="relative h-12 mb-5">
          <div className="relatvie flex items-center mb-5 px-4 top-tablist-wrap">
            <div className="flex gap-2 w-full text-sm overflow-x-auto scrollbar-display-none [&>*:last-child]:mr-4">
              <div className="px-3 py-[10px] flex justify-between items-center gap-7 border border-gray-9">
                <span className="w-max">독립출판</span>
                <Icon name="close" width={12} height={12} viewBox="0 0 18 18" />
              </div>
              <div className="px-3 py-[10px] flex justify-between items-center gap-7 border border-gray-9">
                <span className="w-max">전문서적</span>
                <Icon name="close" width={12} height={12} viewBox="0 0 18 18" />
              </div>
              <div className="px-3 py-[10px] flex justify-between items-center gap-7 border border-gray-9">
                <span className="w-max">해외서적</span>
                <Icon name="close" width={12} height={12} viewBox="0 0 18 18" />
              </div>
              <div className="px-3 py-[10px] flex justify-between items-center gap-7 border border-gray-9">
                <span className="w-max">독립출판</span>
                <Icon name="close" width={12} height={12} viewBox="0 0 18 18" />
              </div>
              <div className="px-3 py-[10px] flex justify-between items-center gap-7 border border-gray-9">
                <span className="w-max">독립출판</span>
                <Icon name="close" width={12} height={12} viewBox="0 0 18 18" />
              </div>
            </div>

            <div className="flex gap-[18px] pr-4 py-2 shrink-0">
              <div onClick={() => setFilterModalVisible(true)}>
                <Icon name="filter" />
              </div>
              <div onClick={() => setOrderModalVisible(true)}>
                <Icon name="order" />
              </div>
            </div>
          </div>
        </div>

        <section className="px-4 grid grid-cols-2 gap-y-7">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Card key={item} id={item} />
          ))}
        </section>
      </div>

      {filterModalVisible && (
        <FilterBottomSheet
          onClose={() => setFilterModalVisible(!filterModalVisible)}
        />
      )}

      {orderModalVisible && (
        <ArrayBottomSheet
          onClose={() => setOrderModalVisible(!orderModalVisible)}
        />
      )}
    </>
  );
}

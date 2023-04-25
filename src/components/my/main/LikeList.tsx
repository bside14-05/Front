"use client";

import Icon from "@/components/common/icon/Icon";
import { useEffect, useState } from "react";
import Button from "../../common/button";

interface Iprops {
  list?: { id: number; title: string; adress: string }[];
  emptyText?: string;
  category: string;
}

function LikeList({ list, category, emptyText }: Iprops) {
  const [updateList, setUpdateList] = useState(list);

  const handleClick = () => {
    setUpdateList(undefined);
  };

  useEffect(() => {
    setUpdateList(list);
  }, []);

  if (updateList === undefined)
    return <Button type="outline">{emptyText}</Button>;

  return (
    <div className="border-2 p-4">
      <header className="flex justify-between mb-4">
        <div className="text-gray-4 text-sm">{`${category} ( ${updateList.length} )`}</div>
        <div onClick={handleClick}>
          <Icon name={"rightArrow"} />
        </div>
      </header>
      <div className="flex">
        {updateList.map((item) => (
          <div key={item.id} className="flex">
            <div className="w-[150px] mr-2">
              <div className="bg-black h-[100px] mb-2">image</div>
              <div className="flex justify-between">
                <div className="text-sm">{item.title}</div>
                <Icon name="likeActive" />
              </div>
              <div className="text-gray-5 text-xs">{item.adress}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LikeList;

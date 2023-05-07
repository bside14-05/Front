import Image from "next/image";

import Icon from "@/components/common/icon";

interface Item {
  id: number;
  name: string;
  adress: string;
  like: boolean;
}

interface Props {
  list: Item[];
}

const Card = (contents: Item) => (
  <div>
    <div className="h-[109px] w-full bg-black mb-[8px]">
      <Image src={""} alt={""} />
    </div>
    <div>
      <div className="flex justify-between">
        <div className="text-sm">{contents.name}</div>
        {contents.like ? <Icon name={"bookmarkFill"} /> : <></>}
      </div>
      <div className="text-gray-4 text-xs">{contents.adress}</div>
    </div>
  </div>
);

function List({ list }: Props) {
  return (
    <div className="grid grid-cols-3 gap-2 p-[2px]">
      {list.map((item) => (
        <div key={item.id} className="">
          {Card(item)}
        </div>
      ))}
    </div>
  );
}

export default List;

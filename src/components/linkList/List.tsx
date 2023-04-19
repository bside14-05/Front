import Image from "next/image";

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
    <div className="h-[109px] w-[109px] bg-black">
      <Image src={""} alt={""} />
    </div>
    <div>
      <div>
        <div>{contents.name}</div>
        <div>{contents.like}</div>
      </div>
      <div>{contents.adress}</div>
    </div>
  </div>
);

function List({ list }: Props) {
  return (
    <div className="flex flex-wrap p-[2px]">
      {list.map((item) => (
        <div key={item.id} className="h-[176px] w-[109px] mx-[2px]">
          {Card(item)}
        </div>
      ))}
    </div>
  );
}

export default List;

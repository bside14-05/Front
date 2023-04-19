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
  <div key={contents.id} className="h-[109px] w-[176px]">
    <div>
      <Image height="109" width="109" src={""} alt={""} />
      <div>
        <div>
          <div>{contents.name}</div>
          <div>{contents.like}</div>
        </div>
        <div>{contents.adress}</div>
      </div>
    </div>
  </div>
);

function List({ list }: Props) {
  return <div className="flex flex-wrap">{list.map((item) => Card(item))}</div>;
}

export default List;

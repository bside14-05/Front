const IconWrapper = () => (
  <div className="h-[24px] w-[24px] border-[1px] border-black m-[1px]"></div>
);

function Card() {
  return (
    <div className="relative w-1/2">
      <div className="absolute top-[10px] right-0 flex flex-wrap w-[60px]">
        {IconWrapper()}
        {IconWrapper()}
        {IconWrapper()}
        {IconWrapper()}
      </div>
      <div className="h-[187px]"></div>
      <div className="p-[16px] h-[118px] bg-[#FAFAFA]">
        <div className="flex justify-between">
          <div className="font-medium text-sm mb-[10px]">Title</div>
          {IconWrapper()}
        </div>
        <div className="text-xs  mb-[10px]">adress</div>
      </div>
    </div>
  );
}

export default Card;

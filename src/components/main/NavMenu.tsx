const IconWrapper = (src: string) => (
  <div className="h-[24px] w-[24px] border-black border-[1px] m-auto"></div>
);

function NavMenu() {
  return (
    <div className="sticky flex justify-around px-[30px] items-center bottom-0 w-full h-[66px] bg-[#F1EFF2]">
      <div>
        {IconWrapper("")}
        home
      </div>
      <div>
        {IconWrapper("")}
        book story
      </div>
      <div>
        {IconWrapper("")}
        Gathering
      </div>
      <div>
        {IconWrapper("")}
        Menu
      </div>
    </div>
  );
}

export default NavMenu;

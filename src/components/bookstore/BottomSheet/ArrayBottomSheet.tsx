import Button from "@/components/common/button";
import Icon from "@/components/common/icon";
import BottomSheet from "@/components/template/BottomSheet";

export default function ArrayBottomSheet({ onClose }: { onClose: () => void }) {
  return (
    <BottomSheet onClose={onClose}>
      <div className="h-full flex flex-col">
        <h2 className="text-2xl font-CelloGX font-semibold my-7">Array</h2>

        <ul className="flex-1 flex flex-col gap-4 text-lg">
          <li className="flex justify-between py-px">
            <span>최신순</span>
            <Icon name="bookmark" />
          </li>
          <li className="flex justify-between py-px">
            <span>이름순</span>
            <Icon name="bookmark" />
          </li>
        </ul>

        <div className="flex">
          <Button type="normal">적용</Button>
        </div>
      </div>
    </BottomSheet>
  );
}

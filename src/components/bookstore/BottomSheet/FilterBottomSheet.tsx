import Button from "@/components/common/button";
import Icon from "@/components/common/icon";
import BottomSheet from "@/components/template/BottomSheet";

export default function FilterBottomSheet({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <BottomSheet onClose={onClose}>
      <div className="h-full flex flex-col">
        <h2 className="text-2xl font-CelloGX font-semibold my-7">Fillter</h2>

        <ul className="flex-1 flex flex-col gap-4 text-lg mb-12">
          <li className="flex justify-between py-px">
            <span>독립출판물</span>
            <Icon name="bookmark" />
          </li>
          <li className="flex justify-between py-px">
            <span>전문서적</span>
            <Icon name="bookmark" />
          </li>
          <li className="flex justify-between py-px">
            <span>종합서적</span>
            <Icon name="bookmark" />
          </li>
          <li className="flex justify-between py-px">
            <span>해외서적</span>
            <Icon name="bookmark" />
          </li>
        </ul>

        <div className="flex gap-2">
          <Button type="outline">초기화</Button>
          <Button type="normal">적용</Button>
        </div>
      </div>
    </BottomSheet>
  );
}

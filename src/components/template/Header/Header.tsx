import Icon from "@/components/common/icon";

export default function Header({ onLNBOpen }: { onLNBOpen: () => void }) {
  return (
    <header className="px-4 py-5 flex flex-row-reverse">
      <button onClick={onLNBOpen}>
        <Icon name="menu" />
      </button>
    </header>
  );
}

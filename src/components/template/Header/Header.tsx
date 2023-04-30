import Icon from "@/components/common/icon";

export default function Header({ onLNBOpen }: { onLNBOpen: () => void }) {
  return (
    <header className="sticky top-0 px-4 py-5 flex flex-row-reverse bg-white z-50">
      <button onClick={onLNBOpen}>
        <Icon name="menu" width={32} height={32} viewBox="0 0 28 28" />
      </button>
    </header>
  );
}

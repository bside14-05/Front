import { cn } from "@/lib/utils";

export interface Iprops extends React.HTMLProps<HTMLButtonElement> {
  type: "outline" | "normal";
}

function Button({
  type,
  name,
  value,
  disabled,
  children,
  onClick,
  className,
}: Iprops) {
  const typeStyle = (type: Iprops["type"]) => {
    if (type === "normal")
      return "text-white bg-black active:bg-gray-700 disabled:bg-black";
    if (type === "outline") return "border-2";
  };

  return (
    <button
      className={cn(`${typeStyle(type)} w-full h-[54px]`, className)}
      name={name}
      value={value}
      disabled={disabled}
      onClick={onClick}
    >
      <>{children}</>
    </button>
  );
}

export default Button;

import { cn } from "@/lib/utils";
import { Icon } from "../icon";

interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
  text?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean; // 선택불가능
}

export function Checkbox({
  checked,
  onToggle,
  text,
  size = "sm",
  disabled,
}: CheckboxProps) {
  return (
    <label
      className={cn(
        "relative inline-flex items-center gap-2",
        size === "md" && "text-lg",
        size === "lg" && "text-3xl"
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="absolute left-0 top-0 w-0 h-0"
        disabled={disabled}
      />
      <span
        className={cn(
          "relative flex justify-center items-center border w-[1.125em] h-[1.125em]",
          disabled && "bg-[#D1D1D1] border-none",
          checked && `bg-[#111111] border-none`
        )}
      >
        <Icon
          name="check"
          className={cn(
            checked || disabled ? "stroke-white" : "stroke-[#D1D1D1]"
          )}
        />
      </span>
      {text && <span>{text}</span>}
    </label>
  );
}

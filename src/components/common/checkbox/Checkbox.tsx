"use client";

import { ReactElement } from "react";
import { cn } from "@/lib/utils";
import Icon from "../icon";

interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
  text?: string | (string | ReactElement)[];
  size?: "sm" | "md" | "lg";
  disabled?: boolean; // 선택 불가능
}

function Checkbox({
  checked,
  onToggle,
  text,
  size = "md",
  disabled,
}: CheckboxProps) {
  return (
    <label
      className={cn(
        "relative inline-flex items-start gap-2",
        size === "sm" && "text-sm",
        size === "md" && "text-lg",
        size === "lg" && "text-3xl"
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="_hidden"
        disabled={disabled}
      />
      <div
        className={cn(
          "relative flex justify-center items-center border w-[1.25em] h-[1.25em] flex-none mt-[3px]",
          disabled && "bg-[#D1D1D1] border-[#D1D1D1]",
          checked && `bg-[#111111] border-[#111111]`
        )}
      >
        <Icon
          name="check"
          className={cn(
            checked || disabled ? "stroke-white" : "stroke-[#D1D1D1]"
          )}
        />
      </div>
      {text && <span>{text}</span>}
    </label>
  );
}

export default Checkbox;

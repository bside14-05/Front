"use client";
import { FC, SVGProps } from "react";
import * as vectors from "./vectors";
// import Check from "./vectors/check.svg";

type IconName = keyof typeof vectors;

interface IconProps {
  name: IconName;
  className?: string;
}

function Icon({ name, className = "stroke-black" }: IconProps) {
  const Vector = vectors[name] as unknown as FC<SVGProps<SVGSVGElement>>;
  return <Vector className={className} />;
  // return <Check />;
}

export default Icon;

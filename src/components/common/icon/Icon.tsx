"use client";
import * as vectors from "./vectors";

type IconName = keyof typeof vectors;

interface IconProps {
  name: IconName;
  className?: string;
}

function Icon({ name, className }: IconProps) {
  const Vector = vectors[name];
  return <Vector className={className} />;
}

export default Icon;

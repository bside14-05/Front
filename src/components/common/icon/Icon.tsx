"use client";
import * as vectors from "./vectors";

type IconName = keyof typeof vectors;

interface IconProps {
  name: IconName;
  width?: number;
  height?: number;
  viewBox?: string;
  className?: string;
}

function Icon({ name, width, height, viewBox, className }: IconProps) {
  const Vector = vectors[name];

  if (width && height) {
    return (
      <Vector
        className={className}
        width={width}
        height={height}
        viewBox={viewBox}
        stroke={"currentColor"}
      />
    );
  }

  return <Vector className={className} />;
}

export default Icon;

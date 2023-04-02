import * as vectors from "./vectors";

type IconName = keyof typeof vectors;

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className = "stroke-black" }: IconProps) {
  const Vector = vectors[name];
  return <Vector className={className} />;
}

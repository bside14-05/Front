import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

interface Props {
  children: ReactNode;
}

export default function RecoilWrapper({ children }: Props) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

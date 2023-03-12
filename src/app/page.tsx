"use client";
import { useState } from "react";

import Input, { Iprops as InputPropsType } from "@/components/common/Input";
import RecoilWrapper from "./recoilWrapper";

function Home() {
  const [value, setValue] = useState<{ [key: string]: string }>({});

  const onChangeInput: InputPropsType["onChange"] = (name, value) => {
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <RecoilWrapper>
      <div className="h-full w-full bg-fuchsia-400">
        <Input
          type="normal"
          name={"test"}
          value={value["test"] ?? ""}
          onChange={onChangeInput}
        />
      </div>
    </RecoilWrapper>
  );
}

export default Home;

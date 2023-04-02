import { Meta, StoryFn } from "@storybook/react";
import { useEffect, useState } from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Components/common/Checkbox",
  component: Checkbox,
} as Meta<typeof Checkbox>;

//👇 We create a “template” of how args map to rendering
const Template: StoryFn<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onToggle={() => {
        setChecked(!checked);
        args.onToggle();
      }}
    />
  );
};

export const Basic = Template.bind({});

import { Meta, StoryFn } from "@storybook/react";
import Icon from "./Icon";
import * as vectors from "./vectors";

export default {
  title: "Components/common/Icon",
  component: Icon,
  tags: ["autodocs"],
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => {
  return (
    <div className="w-10 h-10 flex justify-center items-center">
      <Icon className="stroke-black" {...args} />
    </div>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  name: "check",
};

export function AllIcons() {
  const keys = Object.keys(vectors) as (keyof typeof vectors)[];

  return (
    <div className="flex flex-wrap gap-4">
      {keys.map((name) => (
        <div key={name} className="flex flex-col justify-center items-center">
          <div className="w-10 h-10 flex justify-center items-center">
            <Icon name={name} className="stroke-black" />
          </div>
          <div>{name}</div>
        </div>
      ))}
    </div>
  );
}

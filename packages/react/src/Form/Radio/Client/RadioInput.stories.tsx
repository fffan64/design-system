import { Meta, StoryObj } from "@storybook/react";
import { ComponentPropsWithRef } from "react";
import { RadioInput } from "./RadioInput";
import { RadioModes } from "./Radio";
import { Icon } from "../../../Icons/Icons.client";

const meta: Meta<typeof RadioInput> = {
  component: RadioInput,
  title: "Client/Components/Form/Input/Radio",
  argTypes: { onChange: { action: "onChange" } },
};

export default meta;

type RadioInputProps = Omit<
  ComponentPropsWithRef<typeof RadioInput>,
  "classModifier"
> & {
  classModifier?: string[];
};
export const RadioInputStory: StoryObj<RadioInputProps> = {
  name: "RadioInput",
  render: ({ classModifier, ...args }) => (
    <RadioInput classModifier={classModifier?.join(" ")} {...args} />
  ),
  args: {
    label: "Where are you ?",
    mode: RadioModes.inline,
    value: "",
    classModifier: [],
    isChecked: false,
    readOnly: false,
    disabled: false,
    name: "placeName",
    options: [
      {
        icon: <Icon name="flag" />,
        label: "Paris",
        description: "Capitale de la France",
        value: "paris",
      },
      {
        icon: <Icon name="home" />,
        label: "Lille",
        value: "lille",
      },
      {
        label: "Madrid",
        description: "Capitale de l'Espagne",
        value: "madrid",
      },
      {
        label: "Berlin",
        value: "berlin",
      },
    ],
  },
  argTypes: {
    onChange: { action: "onChange" },
    mode: {
      options: [RadioModes.classic, RadioModes.default, RadioModes.inline],
      control: { type: "inline-radio" },
    },
    value: {
      options: ["empty", "paris", "lille", "madrid", "berlin"],
      mapping: {
        empty: "",
      },
      control: { type: "inline-radio" },
    },
    classModifier: {
      options: ["disabled"],
      control: { type: "inline-check" },
    },
  },
};

import { Meta, StoryObj } from "@storybook/react";
import { ComponentPropsWithRef } from "react";
import { CheckboxInput } from "./CheckboxInput";
import { CheckboxModes } from "./Checkbox";
import { Icon } from "../../../Icons/Icons.client";

const meta: Meta = {
  component: CheckboxInput,
  title: "Client/Components/Form/Input/Checkbox",
  argTypes: { onChange: { action: "onChange" } },
};

export default meta;

export const CheckboxInputStory: StoryObj<
  ComponentPropsWithRef<typeof CheckboxInput>
> = {
  name: "CheckboxInput",
  render: ({ ...args }) => <CheckboxInput {...args} />,
  args: {
    label: "What cities have you visited ?",
    description: "During the last 10 years",
    mode: CheckboxModes.inline,
    disabled: false,
    erroneous: false,
    errorLabel: "Vous devez sélectionner au moins une valeur",
    name: "placeName",
    options: [
      {
        icon: <Icon name="flag" />,
        title: "Paris",
        subtitle: "Île-de-France",
        description: "Capitale de la France",
        value: "paris",
      },
      { icon: <Icon name="home" />, title: "Lille", value: "lille" },
      {
        title: "Madrid",
        description: "Capitale de l'Espagne",
        value: "madrid",
      },
      {
        title: "Berlin",
        value: "berlin",
      },
    ],
  },
  argTypes: {
    onChange: { action: "onChange" },
    mode: {
      options: [
        CheckboxModes.classic,
        CheckboxModes.default,
        CheckboxModes.inline,
      ],
      control: { type: "inline-radio" },
    },
    options: {
      options: ["empty", "paris", "lille", "madrid", "berlin"],
      mapping: {
        empty: "",
      },
      control: { type: "inline-check" },
    },
  },
};

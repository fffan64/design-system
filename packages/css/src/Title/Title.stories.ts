import type { Meta, StoryObj } from "@storybook/html";
import "./Title.agent.scss";

const meta: Meta = {
  title: "Title",
};

export default meta;

const MODIFIERS = [
    "af-title",
    "af-title--bigTitle",
    "af-title--content",
    "af-subtitle",
];

export const Default: StoryObj = {
  render: (args) => {
    const text = document.createElement("h1");
    text.innerText = args.title;
    text.style.color = "#000072";

   
    text.className = [
      args.className ,
      args.classModifier ? args.classModifier : "",
    ].join(" ");

    return text;
  },
  args: {
    title: "Sample Title",
    classModifier: "",
    className:"",
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "select" },
    },
  },
};

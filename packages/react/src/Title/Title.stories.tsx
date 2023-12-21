import { Meta, StoryObj } from "@storybook/react"
import { Title } from "./Title"

const MODIFIERS = [
  "af-title",
  "af-title--bigTitle",
  "af-title--content",
  "af-subtitle",
]

const meta: Meta<typeof Title> = {
  component: Title,
  title: "Components/Title",
  parameters: {
    layout: "centered",
  },
}

export default meta

type StoryProps = Omit<
  React.ComponentProps<typeof Title>,
  "classModifier" | "children"
> & {
  children: string
  classModifier: string[]
}

type Story = StoryObj<StoryProps>

export const Default: Story = {
  name: "Title",
  render: ({ children: text, classModifier, ...args }) => (
    <Title classModifier={classModifier.join(" ")} {...args}>
      {text}
    </Title>
  ),
  args: {
    children: "Title Text",
    classModifier: [] as string[],
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "multi-select" },
    },
  },
}

export const BigTitle: StoryObj<typeof Title> = {
  name: "Big Title",
  args: {
    children: "Big Title Text",
    classModifier: "af-title--bigTitle",
  },
}

export const Content: StoryObj<typeof Title> = {
  name: "Content",
  args: {
    children: "Content Text",
    classModifier: "af-title--content",
  },
}

export const SubTitle: StoryObj<typeof Title> = {
  name: "SubTitle",
  args: {
    children: "SubTitle Text",
    classModifier: "af-subtitle",
  },
}

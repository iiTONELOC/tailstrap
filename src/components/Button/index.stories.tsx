import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps as Props } from "./";

export default {
  title: "Components/User Interface/Button",
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: "Hi 😃" };

import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps as Props } from "./";

export default {
  title: "Components/User Interface/Button",
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = { children: "Default" };

export const SuccessButton = Template.bind({});
SuccessButton.args = {
  children: "success",
  size: "lg",
  variant: "success",
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  children: "danger",
  size: "lg",
  variant: "danger",
};

export const WarningButton = Template.bind({});
WarningButton.args = {
  children: "warning",
  size: "lg",
  variant: "warning",
};

export const InfoButton = Template.bind({});
InfoButton.args = {
  children: "info",
  size: "lg",
  variant: "info",
};

export const LightButton = Template.bind({});
LightButton.args = {
  children: "light",
  size: "lg",
  variant: "light",
};

export const DarkButton = Template.bind({});
DarkButton.args = {
  children: "dark",
  size: "lg",
  variant: "dark",
};

export const SuccessOutlineButton = Template.bind({});
SuccessOutlineButton.args = {
  children: "success-outline",
  size: "lg",
  variant: "success-outline",
};

export const DangerOutlineButton = Template.bind({});
DangerOutlineButton.args = {
  children: "danger-outline",
  size: "lg",
  variant: "danger-outline",
};

export const InfoOutlineButton = Template.bind({});
InfoOutlineButton.args = {
  children: "info-outline",
  size: "lg",
  variant: "info-outline",
};

export const LightOutlineButton = Template.bind({});
LightOutlineButton.args = {
  children: "light-outline",
  size: "lg",
  variant: "light-outline",
};

export const DarkOutlineButton = Template.bind({});
DarkOutlineButton.args = {
  children: "dark-outline",
  size: "lg",
  variant: "dark-outline",
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  children: "outline",
  size: "lg",
  variant: "outline",
};


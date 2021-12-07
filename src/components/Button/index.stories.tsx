import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps as Props } from "./";

export default {
  title: "Components/User Interface/Button",
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;
//  default button
export const DefaultButton = Template.bind({});
DefaultButton.args = { children: "Default" };

//  success button
export const SuccessButton = Template.bind({});
SuccessButton.args = {
  children: "success",
  size: "lg",
  variant: "success",
};

//  danger button
export const DangerButton = Template.bind({});
DangerButton.args = {
  children: "danger",
  size: "lg",
  variant: "danger",
};


//  warning button
export const WarningButton = Template.bind({});
WarningButton.args = {
  children: "warning",
  size: "lg",
  variant: "warning",
};


//  info button
export const InfoButton = Template.bind({});
InfoButton.args = {
  children: "info",
  size: "lg",
  variant: "info",
};


//  light button
export const LightButton = Template.bind({});
LightButton.args = {
  children: "light",
  size: "lg",
  variant: "light",
};


//  dark button
export const DarkButton = Template.bind({});
DarkButton.args = {
  children: "dark",
  size: "lg",
  variant: "dark",
};


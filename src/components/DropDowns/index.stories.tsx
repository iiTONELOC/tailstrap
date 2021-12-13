import { Meta, Story } from "@storybook/react";
import DropButton, { DropButtonProps as Props } from "./DropButton";

export default {
  title: "Components/User Interface/Drop Button",
  component: DropButton,
} as Meta;
const dropData = [
  { name: 'Item 1', },
  { name: 'Visit Google', href: 'https://google.com' },
  { name: 'Item 3', },
]
const Template: Story<Props> = (args) => <DropButton {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  label: 'Drop Button',
  dropItems: dropData
};

export const SuccessButton = Template.bind({});
SuccessButton.args = {
  label: 'Drop Button',
  dropItems: dropData,
  variant: "success",
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  label: 'Drop Button',
  dropItems: dropData,
  variant: "danger",
};

export const WarningButton = Template.bind({});
WarningButton.args = {
  label: 'Drop Button',
  dropItems: dropData,
  variant: "warning",
};

export const InfoButton = Template.bind({});
InfoButton.args = {
  label: 'Drop Button',
  dropItems: dropData,
  variant: "info",
};

export const LightButton = Template.bind({});
LightButton.args = {
  label: 'Drop Button',
  dropItems: dropData,
  variant: "light",
};

export const DarkButton = Template.bind({});
DarkButton.args = {
  label: 'Drop Button',
  dropItems: dropData,
  variant: "dark",
};

export const SuccessOutlineButton = Template.bind({});
SuccessOutlineButton.args = {
  label: 'Drop Button',
  dropItems: dropData,
  variant: "success-outline",
};

export const DangerOutlineButton = Template.bind({});
DangerOutlineButton.args = {
  label: 'Drop Button',
  dropItems: dropData,
  variant: "danger-outline",
};

export const InfoOutlineButton = Template.bind({});
InfoOutlineButton.args = {
  label: 'Drop Button',
  dropItems: dropData,
  variant: "info-outline",
};

export const LightOutlineButton = Template.bind({});
LightOutlineButton.args = {
  label: 'Drop Button',
  dropItems: dropData,
  variant: "light-outline",
};

export const DarkOutlineButton = Template.bind({});
DarkOutlineButton.args = {
  label: 'Drop Button',
  dropItems: dropData,
  variant: "dark-outline",
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  label: 'Drop Button',
  dropItems: dropData,
  variant: "outline",
};


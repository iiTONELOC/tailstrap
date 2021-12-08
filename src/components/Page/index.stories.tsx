import { Meta, Story } from "@storybook/react";
import Page, { Props } from "./";

export default {
  title: "Components/Layouts /Page",
  component: Page,
} as Meta;

const Template: Story<Props> = (args) => <Page {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = { children: "Default" };




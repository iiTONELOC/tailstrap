import { Meta, Story } from "@storybook/react";
import Bar, { BarProps } from "./Bar";
import Page from "../Page";
export default {
  title: "Components/User Interface/Navigation",
  component: Bar,
} as Meta;
const navData = [
  { name: 'Nav Item 1', props: { href: 'https://google.com' } },
  { name: 'Visit Google', props: { href: 'https://google.com' } },
  { name: 'Nav Item 3', props: { href: 'https://google.com' } },
]
const Template: Story<BarProps> = (args) => (
  <Page className="start-center">
    <Bar {...args} />
  </Page>

);

export const DefaultBar = Template.bind({});
DefaultBar.args = { navItems: navData };
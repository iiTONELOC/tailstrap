import { Meta, Story } from "@storybook/react";
import Page from "../Page";
import Box, { BoxProps as Props } from "./";

export default {
  title: "Components/User Interface/Box",
  component: Box,
} as Meta;

const Template: Story<Props> = (args) => (
  <Page variant="center" className="p-5">
    <Box {...args} />
  </Page>);
function renderGridChildren() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return list.map((item, index) => (
    <span
      key={index}
      className="flex flex-col items-center justify-center w-24 h-24 bg-green-600 rounded-md p-2 text-white ">0{item}</span>
  ))
};
function renderFlexChildren() {
  return (
    <>
      <div className="w-14 h-14 bg-green-600 text-center text-white">
        01
      </div>
      <div className="w-64 bg-green-600 text-center text-white">
        02
      </div>
      <div className="w-32 bg-green-600 text-center text-white">
        03
      </div>
    </>
  )
}

export const BoxVariantRow = Template.bind({});
BoxVariantRow.args = {
  variant: 'row',
  className: 'bg-black w-full',
  children: <span className="flex flex-col items-center justify-center w-24 h-24 bg-green-600 rounded-md p-2  text-white ">Row</span>,
};
export const BoxVariantCol = Template.bind({});
BoxVariantCol.args = {
  variant: 'col',
  className: 'bg-black h-screen',
  children: <span className="flex flex-col items-center justify-center w-24 h-24 bg-green-600 rounded-md p-2  text-white ">Col</span>,
};
export const BoxVariantGrid = Template.bind({});
BoxVariantGrid.args = {
  variant: 'grid',
  className: 'bg-black  grid-rows-4 grid-flow-col gap-4',
  children: renderGridChildren()
};
export const BoxVariantFlex = Template.bind({});
// Use flex to create a block - level flex container.
BoxVariantFlex.args = {
  variant: 'flex',
  className: 'bg-black w-full gap-3',
  children: renderFlexChildren()
};
export const BoxVariantBlock = Template.bind({});
BoxVariantBlock.args = {
  variant: 'block',
  className: 'bg-black w-full gap-3',
  children: <span className="flex flex-col items-center justify-center w-24 h-24 bg-green-600 rounded-md p-2  text-white ">Block</span>
};
export const BoxVariantInlineGrid = Template.bind({});
BoxVariantInlineGrid.args = {
  variant: 'inline-grid',
  className: 'bg-black  grid-rows-4 grid-flow-col gap-4',
  children: renderGridChildren()
};

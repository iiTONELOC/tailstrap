import { fontSizes } from "../Size";
import { Sizes } from "../../../types";


export default function buttonSizes(size: Sizes) {
    switch (size) {
        case "xs":
            return `${fontSizes(size)} py-2 px-3`
        case "sm":
            return `${fontSizes(size)} py-2 px-3`
        case "md":
            return `${fontSizes(size)} py-2 px-3`;
        case "lg":
            return `${fontSizes(size)} py-2 px-3`;
        case "xl":
            return `${fontSizes(size)} py-2 px-3`;
        case "2xl":
            return `${fontSizes(size)} py-2 px-3`;
        case "3xl":
            return `${fontSizes(size)} py-2 px-3`;
        case "4xl":
            return `${fontSizes(size)} p-3`;
        case "5xl":
            return `${fontSizes(size)} pt-3 px-3 pb-4`;
        case "6xl":
            return `${fontSizes(size)} pt-4 px-4 pb-5`;
        case "7xl":
            return `${fontSizes(size)} pt-4 px-4 pb-6`;
        case "8xl":
            return `${fontSizes(size)} pt-5 px-5 pb-7`;
        case "9xl":
            return `${fontSizes(size)} pt-7 px-7 pb-9`;
        default:
            return `${fontSizes('md')} py-2 px-3`;
    };
};
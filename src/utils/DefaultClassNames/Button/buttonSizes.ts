import { Sizes } from "../../../types";
import { fontSizes } from "../Size";

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
            return `${fontSizes(size)} p-3`;
        case "6xl":
            return `${fontSizes(size)} p-4`;
        case "7xl":
            return `${fontSizes(size)} p-4`;
        case "8xl":
            return `${fontSizes(size)} p-5`;
        case "9xl":
            return `${fontSizes(size)} p-7`;
        default:
            return `${fontSizes(size)} py-2 px-3`;
    }
};
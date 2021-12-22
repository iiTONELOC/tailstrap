import { Sizes } from "../../../types";
import { fontSizes } from "../Size";


export default function badgeSizes(size: Sizes) {
    switch (size) {
        case 'xs':
            return `${fontSizes(size)} px-2`;
        case "sm":
            return `${fontSizes(size)} px-3`
        case "md":
            return `${fontSizes(size)} px-3`;
        case "lg":
            return `${fontSizes(size)} px-5`;
        case "xl":
            return `${fontSizes(size)} pb-1 px-6`;
        case "2xl":
            return `${fontSizes(size)} pb-1 px-6`;
        case "3xl":
            return `${fontSizes(size)} pb-1 px-7`;
        case "4xl":
            return `${fontSizes(size)} pb-2 px-7`;
        case "5xl":
            return `${fontSizes(size)} pt-1 pb-3 px-8`;
        case "6xl":
            return `${fontSizes(size)} pt-1 pb-4 px-9`;
        case "7xl":
            return `${fontSizes(size)} pt-1 pb-4 px-10`;
        case "8xl":
            return `${fontSizes(size)} pt-1 pb-5 px-12`;
        case "9xl":
            return `${fontSizes(size)} pt-1 pb-7 px-14`;
        default:
            return `${fontSizes('md')} px-3`;
    }
};
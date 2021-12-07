import { Sizes } from "../../types";

export default function buttonSizes(size: Sizes) {
    switch (size) {
        case 'xs':
            return 'text-xs py-2 px-3'
        case "sm":
            return 'text-sm py-2 px-3'
        case "md":
            return "text-base py-2 px-3";
        case "lg":
            return "text-lg py-2 px-3";
        case "xl":
            return "text-xl py-2 px-3";
        case "2xl":
            return "text-2xl py-2 px-3";
        case "3xl":
            return "text-3xl py-2 px-3";
        case "4xl":
            return "text-4xl p-3";
        case "5xl":
            return "text-5xl p-3";
        case "6xl":
            return "text-6xl p-3";
        case "7xl":
            return "text-7xl p-4";
        case "8xl":
            return "text-8xl p-4";
        case "9xl":
            return "text-9xl p-4";
        default:
            return "text-base";
    }
};
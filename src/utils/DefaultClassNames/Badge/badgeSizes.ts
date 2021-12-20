import { Sizes } from "../../../types";

export default function badgeSizes(size: Sizes) {
    switch (size) {
        case 'xs':
            return 'text-xs px-2 ';
        case "sm":
            return 'text-sm px-3'
        case "md":
            return "text-base px-3";
        case "lg":
            return "text-lg px-5";
        case "xl":
            return "text-xl pb-1 px-6";
        case "2xl":
            return "text-2xl pb-1 px-6";
        case "3xl":
            return "text-3xl pb-1 px-7";
        case "4xl":
            return "text-4xl pb-2 px-7";
        case "5xl":
            return "text-5xl pt-1 pb-3 px-8";
        case "6xl":
            return "text-6xl pt-2 pb-4 px-9";
        case "7xl":
            return "text-7xl pt-2 pb-4 px-10";
        case "8xl":
            return "text-8xl pt-2 pb-5 px-12";
        case "9xl":
            return "text-9xl pt-2 pb-7 px-14";
        default:
            return "text-base px-3";
    }
};
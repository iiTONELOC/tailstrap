import { Sizes } from "../../../types";

export default function badgeSizes(size: Sizes) {
    switch (size) {
        case 'xs':
            return 'text-xs px-2'
        case "sm":
            return 'text-sm px-2'
        case "md":
            return "text-base px-2";
        case "lg":
            return "text-lg px-3";
        case "xl":
            return "text-xl px-3 ";
        case "2xl":
            return "text-2xl px-4 pb-1";
        case "3xl":
            return "text-3xl px-4 pb-1";
        case "4xl":
            return "text-4xl px-4 pb-1";
        case "5xl":
            return "text-5xl px-5 pb-1";
        case "6xl":
            return "text-6xl px-6 pb-2";
        case "7xl":
            return "text-7xl px-6 pb-2";
        case "8xl":
            return "text-8xl px-10 pb-3";
        case "9xl":
            return "text-9xl px-10 pb-3";
        default:
            return "text-base px-2";
    }
};
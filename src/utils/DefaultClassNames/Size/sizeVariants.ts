import { Sizes } from "../../../types";


export default function fontSizes(size: Sizes) {

    const firstChar = size?.charAt(0) || "";
    const nextChar = size?.charAt(1) || "";
    if (
        firstChar === "2" && nextChar === "x"
        || firstChar === "3" && nextChar === "x"
        || firstChar === "4" && nextChar === "x"
        || firstChar === "5" && nextChar === "x"
        || firstChar === "6" && nextChar === "x"
        || firstChar === "7" && nextChar === "x"
        || firstChar === "8" && nextChar === "x"
        || firstChar === "9" && nextChar === "x"
    ) {
        // @ts-ignore
        return `${fontSizeData["_" + size]}`
    } else if (size) {
        // @ts-ignore
        return `${fontSizeData[size]}`
    } else {
        return `${fontSizeData['default']}`
    }
};

const fontSizeData = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    _2xl: 'text-2xl',
    _3xl: 'text-3xl',
    _4xl: 'text-4xl',
    _5xl: 'text-5xl',
    _6xl: 'text-6xl',
    _7xl: 'text-7xl',
    _8xl: 'text-8xl',
    _9xl: 'text-9xl',
    default: 'text-base',
};


import { Sizes } from "../../../types";


export default function fontSizes(size: Sizes) {
    if (size) {
        const number = size?.charAt(0) || "";
        if (typeof parseInt(number) === 'number') {
            const token = "_" + size;
            // @ts-ignore
            return `${fontSizeData[token]}`
        } else {
            // @ts-ignore
            return `${fontSizeData[size]}`
        }
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


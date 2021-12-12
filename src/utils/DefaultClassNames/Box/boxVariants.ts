import { BoxVariants as Variants } from "../../../types";

export default function boxVariants(variant: Variants) {
    switch (variant) {
        case 'row':
            return 'flex flex-wrap flex-row';
        case 'col':
            return 'flex flex-col'
        default:
            return `${variant}`
    };
};
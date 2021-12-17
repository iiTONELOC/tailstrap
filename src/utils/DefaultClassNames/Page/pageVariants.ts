import { PageVariants as Variants } from "../../../types";

export default function pageVariants(variant: Variants): string {
    switch (variant) {
        case 'center':
            return 'items-center justify-center';
        case 'start':
            return 'items-start justify-start';
        case 'start-center':
            return 'items-center justify-start';
        case 'center-start':
            return 'items-start justify-center';
        default:
            return '';
    };
};
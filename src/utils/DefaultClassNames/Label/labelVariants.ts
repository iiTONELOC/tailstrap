import { ColorVariants as Variants } from "../../../types";

export default function badgeVariants(variant: Variants) {
    switch (variant) {
        case "success":
            return "bg-green-500 text-white";
        case "danger":
            return "bg-red-600 text-white";
        case "warning":
            return "bg-yellow-400 text-black";
        case "info":
            return "bg-blue-400 text-white";
        case "light":
            return "bg-gray-200 text-black";
        case "dark":
            return "bg-gray-900 text-white";
        default:
            return "bg-blue-600 text-white";
    };
};
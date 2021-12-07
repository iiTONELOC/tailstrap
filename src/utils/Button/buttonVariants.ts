import { Variants } from "../../types";

export default function buttonVariants(variant: Variants) {
    switch (variant) {
        case "success":
            return "bg-green-500 hover:bg-green-700 text-white";
        case "danger":
            return "bg-red-600 hover:bg-red-700 text-white";
        case "warning":
            return "bg-yellow-500 hover:bg-yellow-700 text-black";
        case "info":
            return "bg-blue-400 hover:bg-blue-500 text-white";
        case "light":
            return "bg-gray-200 hover:bg-gray-400 text-black";
        case "dark":
            return "bg-gray-900 hover:bg-gray-700 text-white";
        default:
            return "bg-blue-600 hover:bg-blue-700 text-white";
    };
};
import { Variants } from "../../types";

export default function buttonVariants(variant: Variants) {
    switch (variant) {
        case "success":
            return "bg-green-500 hover:bg-green-700 text-white";
        case "danger":
            return "bg-red-600 hover:bg-red-700 text-white";
        case "warning":
            return "bg-yellow-400 hover:bg-yellow-500 text-black";
        case "info":
            return "bg-blue-400 hover:bg-blue-500 text-white";
        case "light":
            return "bg-gray-200 hover:bg-gray-400 text-black";
        case "dark":
            return "bg-gray-900 hover:bg-gray-800 text-white";
        // outlines no bg-color, border color is the same as the text color
        case "success-outline":
            return "border-2 border-green-500 hover:border-green-700 text-green-500 hover:text-white  hover:bg-green-500";
        case "danger-outline":
            return "border-2 border-red-600 hover:border-red-700 text-red-500 hover:text-white hover:bg-red-500";
        case "warning-outline":
            return "border-2 border-yellow-400 hover:border-yellow-500 text-yellow-400 hover:text-white hover:bg-yellow-400";
        case "info-outline":
            return "border-2 border-blue-400 hover:border-blue-500 text-blue-400 hover:text-white hover:bg-blue-400";
        case "light-outline":
            return "border-2 border-gray-200 hover:border-gray-400 text-gray-200 hover:text-black hover:bg-gray-100";
        case "dark-outline":
            return "border-2 border-gray-900 hover:border-gray-700 text-gray-900 hover:text-white hover:bg-gray-900";
        case "outline":
            return "border-2 border-blue-600 hover:border-blue-700 text-blue-600 hover:text-white hover:bg-blue-600";
        default:
            return "bg-blue-600 hover:bg-blue-700 text-white";
    };
};
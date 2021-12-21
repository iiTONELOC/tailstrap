import { ColorVariants as Variants } from "../../../types";
import { variantData } from "../Color";


function returnVariantBg(variant: string): string {
    // @ts-ignore
    return `${variantData[variant].bg} ${variantData[variant].hover['bg']}`;
};

function returnOutlineBg(variant: string): string {
    // @ts-ignore
    const borderProps = variantData[variant].border;
    // @ts-ignore
    return `${borderProps.thickness} ${borderProps.color} ${borderProps.hover} ${variantData[variant].hover['bg']}`;
};



export default function buttonVariants(variant: Variants, textColor?: string, textHover?: string) {
    if (variant !== undefined) {
        if (variant === "success" || variant === "danger" || variant === "info" || variant === "dark") {
            return `${returnVariantBg(variant)} ${textColor || "text-white"} ${textHover}`;
        } else if (variant === "warning" || variant === "light") {
            return `${returnVariantBg(variant)} ${textColor || "text-black"} ${textHover}`;
        } else if (variant === 'outline') {
            return `${returnOutlineBg("default")} ${textColor || variantData['default'].text} ${textHover || 'hover:text-white'}`;
        } else if (variant?.includes("-")) {
            // @ts-ignore
            return `${returnOutlineBg(variant.split("-")[0])} ${textColor || variantData[variant.split("-")[0]].text} ${textHover || 'hover:text-white'}`;
        } else {
            return `${returnVariantBg('default')} ${textColor || "text-white"} ${textHover}`;
        };
    }

};



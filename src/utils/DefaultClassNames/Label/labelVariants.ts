import { ColorVariants as Variants } from "../../../types";
import { variantData } from '../Color';

function returnVariantBg(variant: string): string {
    // @ts-ignore
    return `${variantData[variant].bg}`;
};
function returnOutline(variant: string): string {
    // @ts-ignore
    return `${variantData[variant].border.thickness} ${variantData[variant].border.color}`;
}
export default function LabelVariants(variant: Variants, textColor?: string) {

    if (variant !== undefined) {
        if (variant === 'warning' || variant === 'light') {
            return `${returnVariantBg(variant)} ${textColor || "text-black"}`;
        } else if (variant.includes('-')) {
            const thisVariant = variant.split('-')[0];
            // @ts-ignore
            return `${returnOutline(thisVariant)} ${textColor || variantData[thisVariant].text}`;
        } else if (variant) {
            console.log(variant)
            return `${returnVariantBg(variant === 'outline' ? 'default' : variant)} ${textColor || "text-white"}`;
        }
    }

};
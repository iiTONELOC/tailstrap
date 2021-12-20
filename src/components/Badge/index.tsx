import { Sizes, ColorVariants } from '../../types';
import { DefaultProps } from "../../types/defaultProps";
import { generateClassNames, GenerateTag, renderAnchor } from '../../utils';
import { BadgeVariantClassNames, BadgeSizeClassNames } from '../../utils/DefaultClassNames';
export interface BadgeProps extends DefaultProps {
    size?: Sizes;
    label?: string;
    rounded?: string;
    background?: string;
    variant?: ColorVariants;
}
export default function Badge({
    size,
    props,
    label,
    variant,
    rounded,
    children,
    className,
    background,
    override = false,
}: BadgeProps): JSX.Element {
    const defaultClass = `flex flex-row justify-center items-center ${rounded ? rounded : "rounded-full"} text-center max-w-max ${BadgeSizeClassNames(size)} 
    ${variant ? BadgeVariantClassNames(variant) : background} `;
    return (
        <GenerateTag
            tag={renderAnchor(props) ? 'a' : props.as ? props.as : 'span'}
            className={generateClassNames({
                nativeArgs: defaultClass,
                userArgs: className,
                override
            })}
            props={...props}
        >
            {label ? label : children}
        </GenerateTag>
    );
};
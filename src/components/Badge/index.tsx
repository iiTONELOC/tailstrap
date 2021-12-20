import { Sizes, ColorVariants } from '../../types';
import { DefaultProps } from "../../types/defaultProps";
import { generateClassNames, GenerateTag, renderAnchor } from '../../utils';
import { BadgeVariantClassNames, BadgeSizeClassNames } from '../../utils/DefaultClassNames';
export interface BadgeProps extends DefaultProps {
    size?: Sizes;
    label?: string;
    background?: string;
    variant?: ColorVariants;
}
export default function Badge({
    size,
    props,
    label,
    variant,
    children,
    className,
    background,
    override = false,
}: BadgeProps): JSX.Element {
    const defaultClass = `rounded-full ${variant ? BadgeVariantClassNames(variant) : background} 
    ${BadgeSizeClassNames(size)} place-items-center`;
    return (
        <GenerateTag
            tag={renderAnchor(props) ? 'a' : 'span'}
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
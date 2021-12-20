import { Sizes, ColorVariants } from '../../types';
import { DefaultProps } from "../../types/defaultProps";
import { generateClassNames, GenerateTag, renderAnchor } from '../../utils';
import { LabelVariantClassNames, LabelSizeClassNames } from '../../utils/DefaultClassNames';
export interface LabelProps extends DefaultProps {
    size?: Sizes;
    label?: string;
    rounded?: string;
    background?: string;
    variant?: ColorVariants;
}
export default function Label({
    size,
    props,
    label,
    variant,
    rounded,
    children,
    className,
    background,
    override = false,
}: LabelProps): JSX.Element {
    const defaultClass = `flex flex-row justify-center items-center ${rounded ? rounded : "rounded-full"} text-center max-w-max ${LabelSizeClassNames(size)} 
    ${variant ? LabelVariantClassNames(variant) : background} `;
    return (
        <GenerateTag
            tag={renderAnchor(props) ? 'a' : props?.as ? props.as : 'span'}
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
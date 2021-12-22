
import { fontSizes } from '../../utils/DefaultClassNames/Size';
import { generateClassNames, GenerateTag, renderAnchor } from '../../utils';
import { LabelVariantClassNames, LabelSizeClassNames } from '../../utils/DefaultClassNames';

import { ButtonProps } from '../Button';
export interface LabelProps extends ButtonProps {
}
export default function Label({
    size,
    props,
    label,
    rounded,
    variant,
    padding,
    children,
    className,
    textColor,
    background,
    override = false,
}: LabelProps): JSX.Element {
    const defaultClass = `flex flex-row justify-center items-center 
    ${rounded ? rounded : "rounded-full"} text-center max-w-max 
    ${padding ? `${padding} ${fontSizes(size)}` : `${LabelSizeClassNames(size)}`}
    ${variant ? LabelVariantClassNames(variant, textColor) :
            `${background} ${textColor ? textColor : "text-white"}`}`;
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
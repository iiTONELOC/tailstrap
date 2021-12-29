import { ButtonProps } from '../Button';
import { fontSizes } from '../../utils/DefaultClassNames/Size';
import { overrideClassNames, GenerateTag, renderAnchor } from '../../utils';
import { LabelVariantClassNames, LabelSizeClassNames } from '../../utils/DefaultClassNames';

export interface LabelProps extends ButtonProps {
};

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
    const defaultClass = `flex flex-row justify-center items-center ${rounded || "rounded-full"} text-center min-w-max ${padding ? `${padding} ${fontSizes(size)}` :
        `${LabelSizeClassNames(size)}`} ${variant ? LabelVariantClassNames(variant, textColor) :
            `${background || ""} ${textColor || "text-white"}`}`;
    return (
        <GenerateTag
            tag={renderAnchor(props) ? 'a' : props?.as ? props.as : 'span'}
            className={overrideClassNames({
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
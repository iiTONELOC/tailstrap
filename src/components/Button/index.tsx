import { Sizes, ColorVariants } from '../../types';
import { DefaultProps } from '../../types/defaultProps';
import { generateClassNames, GenerateTag, renderAnchor } from '../../utils';
import { ButtonVariantClassNames, ButtonSizeClassNames } from '../../utils/DefaultClassNames';
import { fontSizes } from '../../utils/DefaultClassNames/Size';


export interface ButtonProps extends DefaultProps {
  size?: Sizes;
  label?: string;
  rounded?: string;
  padding?: string;
  textColor?: string;
  textHover?: string;
  background?: string;
  variant?: ColorVariants;
  type?: 'button' | 'submit' | 'reset';
}


export default function Button({
  size,
  props,
  label,
  rounded,
  variant,
  padding,
  children,
  className,
  textColor,
  textHover,
  background,
  type = 'button',
  override = false,

}: ButtonProps):
  JSX.Element {
  const defaultClass = `${rounded ? rounded : "rounded-lg"} focus:outline-none focus:shadow-outline 
  ${padding ? `${padding} ${fontSizes(size)}` : ButtonSizeClassNames(size)} ${variant ? ButtonVariantClassNames(variant, textColor, textHover) :
      `${background} ${textColor ? textColor : "text-white"} `} max-w-max`
  const renAnchor = renderAnchor(props);
  return (
    <GenerateTag
      tag={renAnchor ? 'a' : props?.as ? props.as : 'button'}
      className={generateClassNames({
        nativeArgs: defaultClass,
        userArgs: className,
        override
      })}
      // @ts-ignore
      props={{ type: renAnchor ? undefined : type, ...props }}
    >
      {label ? label : children}
    </GenerateTag>
  );
};



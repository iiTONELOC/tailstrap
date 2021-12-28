import { Sizes, ColorVariants } from '../../types';
import { DefaultProps } from '../../types/defaultProps';
import { fontSizes } from '../../utils/DefaultClassNames/Size';
import { overrideClassNames, GenerateTag, renderAnchor } from '../../utils';
import { ButtonVariantClassNames, ButtonSizeClassNames } from '../../utils/DefaultClassNames';



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
};

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
  override = false }: ButtonProps): JSX.Element {
  const renAnchor = renderAnchor(props);

  const defaultClass = `${rounded || "rounded-lg"} focus:outline-none focus:shadow-outline ${padding ? `${padding} ${fontSizes(size)}` :
    ButtonSizeClassNames(size)} ${variant ? ButtonVariantClassNames(variant, textColor, textHover) :
      `${background || ''}${textColor || "text-white"} `}max-w-max`;

  return (
    <GenerateTag
      tag={renAnchor ? 'a' : props?.as ? props.as : 'button'}
      className={overrideClassNames({
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



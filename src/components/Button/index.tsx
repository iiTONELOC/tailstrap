import { Sizes, ColorVariants } from '../../types';
import { DefaultProps } from '../../types/defaultProps';
import { generateClassNames, GenerateTag, renderAnchor } from '../../utils';
import { ButtonVariantClassNames, ButtonSizeClassNames } from '../../utils/DefaultClassNames';



export interface ButtonProps extends DefaultProps {
  size?: Sizes;
  label?: string;
  rounded?: string;
  background?: string;
  variant?: ColorVariants;
  type?: 'button' | 'submit' | 'reset';
}


export default function Button({
  props,
  label,
  rounded,
  children,
  className,
  background,
  size,
  type = 'button',
  override = false,
  variant,
}: ButtonProps):
  JSX.Element {
  const defaultClass = `${rounded ? rounded : "rounded-lg"} focus:outline-none focus:shadow-outline 
  ${ButtonSizeClassNames(size)} ${variant ? ButtonVariantClassNames(variant) : background} `
  const renAnchor = renderAnchor(props);
  return (
    <GenerateTag
      tag={renAnchor ? 'a' : props.as ? props.as : 'button'}
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



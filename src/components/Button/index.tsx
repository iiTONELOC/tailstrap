import { Sizes, ColorVariants } from '../../types';
import { DefaultProps } from '../../types/defaultProps';
import { generateClassNames, GenerateTag, renderAnchor } from '../../utils';
import { ButtonVariantClassNames, ButtonSizeClassNames } from '../../utils/DefaultClassNames';



export interface ButtonProps extends DefaultProps {
  size?: Sizes;
  label?: string;
  variant?: ColorVariants;
  type?: 'button' | 'submit' | 'reset';
}


export default function Button({
  props,
  label,
  children,
  className,
  size = 'lg',
  type = 'button',
  override = false,
  variant = 'default',
}: ButtonProps):
  JSX.Element {
  const defaultClass = `rounded-lg ${ButtonVariantClassNames(variant)} 
  focus:outline-none focus:shadow-outline ${ButtonSizeClassNames(size)}`
  const renAnchor = renderAnchor(props);
  return (
    <GenerateTag
      tag={renAnchor ? 'a' : 'button'}
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



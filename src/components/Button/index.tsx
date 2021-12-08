import { ReactNode } from 'react';
import { generateClassNames, GenerateTag, renderAnchor } from '../../utils';
import { Sizes, ColorVariants } from '../../types';
import { ButtonVariantClassNames, ButtonSizeClassNames } from '../../utils/DefaultClassNames';


export interface ButtonProps {
  size?: Sizes
  props?: object;
  variant?: ColorVariants;
  override?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode | Array<ReactNode>;
};

export default function Button({
  props,
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
      {children}
    </GenerateTag>
  );
};



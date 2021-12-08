import { ReactNode } from 'react';
import { generateClassNames } from '../../utils';
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
  if (props) {
    for (const key in props) {
      if (key === 'href') {
        return (
          <a
            type={type}
            // @ts-ignore -if statement above catches desired property
            href={props?.href}
            target='_blank'
            rel='noopener noreferrer'
            className={generateClassNames({
              nativeArgs: defaultClass,
              userArgs: className,
              override
            })}
            {...props}
          >
            {children}
          </a>
        );
      }
    }
  };
  return (
    <button
      type={type}
      className={generateClassNames({
        nativeArgs: defaultClass,
        userArgs: className,
        override
      })}
      {...props}
    >
      {children}
    </button>
  );
};



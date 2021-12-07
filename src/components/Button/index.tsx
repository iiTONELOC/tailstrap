import { ReactNode } from 'react';
import { createClasses } from '../../utils';
import { Sizes, Variants } from '../../types';
import { buttonVariants } from '../../utils/Button';
import { buttonSizes } from '../../utils/Button';

export interface ButtonProps {
  size?: Sizes
  props?: object;
  variant?: Variants;
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
  const defaultClass = `rounded-lg ${buttonVariants(variant)}  focus:outline-none focus:shadow-outline ${buttonSizes(size)}`
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
            className={createClasses({
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
      className={createClasses({
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



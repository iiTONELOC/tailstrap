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
}: ButtonProps) {
  const defaultClass = `rounded-lg ${buttonVariants(variant)}  focus:outline-none focus:shadow-outline ${buttonSizes(size)}`
  console.log(` PROPS`, props)
  if (props) {
    // check the property keys, if href is one of them render <a> tag instead of button
    // default should open in new tab and no refferrer for security reasons
  }
  return (

    <button
      type={type}
      className={createClasses({ nativeArgs: defaultClass, userArgs: className, override })}
      {...props}
    >
      {children}
    </button>
  );
};



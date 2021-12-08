import { ReactNode } from 'react';
import { PageVariants } from '../../types';
import { generateClassNames } from '../../utils';
import { PageClassNames } from '../../utils/DefaultClassNames';

export interface Props {
  className?: string;
  props?: object;
  variant?: PageVariants;
  override?: boolean;
  children: ReactNode | Array<ReactNode>;
};


export default function Page({
  props,
  variant,
  children,
  className,
  override = false,
}: Props): JSX.Element {
  const defaultClass = `flex flex-col ${PageClassNames(variant)} h-screen w-screen`;
  return (
    <section
      className={
        generateClassNames({
          nativeArgs: defaultClass,
          userArgs: className,
          override
        })
      }
      {...props}
    >
      {children}
    </section>
  );
};
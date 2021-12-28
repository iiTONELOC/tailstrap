import { ReactNode } from 'react';
import { PageVariants } from '../../types';
import { overrideClassNames, GenerateTag } from '../../utils';
import { PageClassNames } from '../../utils/DefaultClassNames';

export interface PageProps {
  props?: object;
  className?: string;
  override?: boolean;
  variant?: PageVariants;
  children: ReactNode | Array<ReactNode>;
};

export default function Page({
  props,
  variant,
  children,
  className,
  override = false,
}: PageProps): JSX.Element {
  const defaultClass = `flex flex-col ${PageClassNames(variant)} min-h-screen min-w-min`;
  return (
    <GenerateTag
      // @ts-ignore
      tag={props?.as || 'main'}
      className={overrideClassNames({
        nativeArgs: defaultClass,
        userArgs: className,
        override
      })}
      {...props}
    >
      {children}
    </GenerateTag>
  );
};
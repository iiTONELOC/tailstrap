import { ReactNode } from 'react';
import { PageVariants } from '../../types';
import { generateClassNames, GenerateTag } from '../../utils';
import { PageClassNames } from '../../utils/DefaultClassNames';

export interface Props {
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
}: Props): JSX.Element {
  const defaultClass = `flex flex-col ${PageClassNames(variant)} h-screen w-screen`;
  return (
    <GenerateTag
      // @ts-ignore
      tag={props?.as || 'main'}
      className={generateClassNames({
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
import { ReactNode } from 'react';
import { createClasses } from '../../utils';

export interface Props {
  className?: string;
  props?: object;
  override?: boolean;
  children: ReactNode | Array<ReactNode>;
};

const defaultClass = 'flex flex-col items-center justify-center min-h-screen w-screen';

function Page({ children, className, override = false, props }: Props) {
  return (
    <section
      className={createClasses({ nativeArgs: defaultClass, userArgs: className, override })}
      {...props}
    >
      {children}
    </section>
  );
};

export default Page;

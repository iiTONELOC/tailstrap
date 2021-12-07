import { ReactNode } from 'react';
import { createClasses } from '../../utils';

export interface Props {
  className?: string;
  override?: boolean;
  children: ReactNode | Array<ReactNode>;
};

const defaultClass = 'flex flex-col items-center justify-center min-h-screen';

function Page({ children, className, override = false }: Props) {
  return (
    <section className={createClasses({ nativeArgs: defaultClass, userArgs: className, override })}>
      {children}
    </section>
  );
};

export default Page;

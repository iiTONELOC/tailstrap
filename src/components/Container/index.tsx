import {ReactNode} from 'react';

export interface Props {
  type?: 'button' | 'submit' | 'reset'
  className?: string
  children: ReactNode | Array<ReactNode>
}


function createClasses(className?: string | undefined) {
  const defaultClassName = 'w-full h-full flex flex-row justify-center items-center'
  return className ? `${defaultClassName} ${className}` : defaultClassName
}



function Container ({children, type = 'button'}: Props) {
  return (
    <section className={createClasses()}>{children}</section>
  )
}

export default Container

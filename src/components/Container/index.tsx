import {ReactNode} from 'react';

export interface Props {
  type?: 'button' | 'submit' | 'reset'
  className?: string
  children: ReactNode | Array<ReactNode>
}

function Container ({children, type = 'button'}: Props) {
  return (
    <button type={type}>{children}</button>
  )
}

export default Container

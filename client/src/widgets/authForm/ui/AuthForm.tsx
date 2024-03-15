import {FC, FormHTMLAttributes, ReactNode} from 'react'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> { 
  children: ReactNode,
  onSubmit: (data: any) => Promise<void>,
}
const AuthForm: FC<FormProps> = ({children, onSubmit, ...rest}) => {
  
  return (
    <form onSubmit={onSubmit} {...rest}>
      {children}
    </form>
  )
}

export default AuthForm
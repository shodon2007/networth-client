import { ReactNode } from "react"
import cls from './AuthTitle.module.scss'

interface AuthTitleProps { 
  children: ReactNode
}

export const AuthTitle = ({children}: AuthTitleProps) => {
  return (
    <h1 className={cls.MainBoldFont}>{children}</h1>
  )
}
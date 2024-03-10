import { ReactNode, ButtonHTMLAttributes } from "react"
import cls from './subMitBtn.module.scss'

interface SubmitBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const SubmitBtn = ({ children }: SubmitBtnProps) => {
  
  return (
    <button className={cls.SubmitBtn}>{children}</button>
  )
}
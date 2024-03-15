import { InputHTMLAttributes, FC, ReactNode } from "react";
import cls from './authInput.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  children: string
}

const Input: FC<InputProps> = ({children, ...props}) => {
  return <input className={cls.Input} {...props} placeholder={children} />
}

export default Input
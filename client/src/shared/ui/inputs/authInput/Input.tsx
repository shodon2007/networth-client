import { InputHTMLAttributes, FC } from "react";
import cls from './authInput.module.scss'
import classNames from "src/shared/lib/classNames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  children: string,
  classname?: string,
}

const Input: FC<InputProps> = ({children, classname, ...props}) => {
  return <input  className={classNames(cls.Input, {}, [])} {...props} placeholder={children} />
}

export default Input
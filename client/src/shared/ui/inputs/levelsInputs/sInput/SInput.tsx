import cls from './style.module.scss'

interface SInputProps { children: string }

export const SInput = ({ children }: SInputProps) => {

  return (
    <input className={cls.sInput}  placeholder={children} />
  )
}
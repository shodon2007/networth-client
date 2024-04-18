
import cls from './style.module.scss'

interface MInputProps { children: string }

export const MInput = ({ children }: MInputProps) => {

  return (
    <input className={cls.MInput} placeholder={children} />
  )
}
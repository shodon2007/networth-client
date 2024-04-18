import cls from './style.module.scss'

interface LInputProps { children: string }

export const LInput = ({ children }: LInputProps) => {

  return (
    <input className={cls.LInput} placeholder={children} />
  )
}
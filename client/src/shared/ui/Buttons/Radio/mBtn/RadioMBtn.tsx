import cls from './RadioMBtn.module.scss'
import { LevelBtns } from 'src/shared/ui/Buttons/LevelsBtn/types/LevelBtnsType'

export const RadioMBtn = ({ children, primary, ...props }: LevelBtns) => {

  return (
    <input className={primary ? `${cls.RadioMBtn} ${cls.Primary}` : cls.RadioMBtn}
      {...props}
    >
      {children}
    </input>
  )
}
import cls from './mBtn.module.scss'
import { LevelBtns } from 'src/shared/ui/Buttons/LevelsBtn/types/LevelBtnsType'

export const MBtn = ({ children, primary, ...props }: LevelBtns) => {

  return (
    <button className={primary ? `${cls.mBtn} ${cls.Primary}` : cls.mBtn}
      {...props}
    >
      {children}
    </button>
  )
}
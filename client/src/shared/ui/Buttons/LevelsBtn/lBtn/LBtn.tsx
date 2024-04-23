import { LevelBtns } from 'src/shared/ui/Buttons/LevelsBtn/types/LevelBtnsType'
import cls from './lBtn.module.scss'

export const LBtn = ({ children, primary, style }: LevelBtns) => {

  return (
    <button
      className={primary ? `${cls.LBtn} ${cls.Primary}` : cls.LBtn}
    >
    { children }
    </button >
  )
}
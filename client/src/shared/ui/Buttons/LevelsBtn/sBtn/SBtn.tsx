import cls from './sBtn.module.scss'
import { LevelBtns } from 'src/shared/ui/Buttons/LevelsBtn/types/LevelBtnsType'

export const SBtn = ({ children, primary }: LevelBtns) => {
  
  return (
    <button className={primary ? `${cls.sBtn} ${cls.Primary}` : cls.sBtn}>
      {children}
    </button>
  )
}
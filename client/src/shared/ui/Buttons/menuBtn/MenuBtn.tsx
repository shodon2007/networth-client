import cls from './menuBtn.module.scss'

interface MenuBtnProps { border: boolean}

export const MenuBtn = ({ border }: MenuBtnProps) => {

  return (
    <button className={border ? `${cls.empty} ${cls.border}` : cls.Empty}>
      <div className={cls.point} />
      <div className={cls.point} />
      <div className={cls.point} />
    </button>
  )
}
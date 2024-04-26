import cls from './SearchBar.module.scss'

interface SearchBarProps { children: string, icon: string }

export const SearchBar = ({ children, icon, ...props }: SearchBarProps) => {
  return (
    <div className={cls.Stroke}>
      <div className={cls.Stroke__BG}>
        <img src={icon} alt="icon"  className={cls.SearchBar__icon}/>
        <input className={cls.SearchBar} placeholder={children} {...props} />
      </div>
    </div>
  )
}
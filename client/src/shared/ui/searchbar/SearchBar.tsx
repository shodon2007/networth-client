import cls from './SearchBar.module.scss'
import MagnifierIcon from 'src/shared/assets/magnifier.svg'

interface SearchBarProps { children: string }

export const SearchBar = ({ children, ...props }: SearchBarProps) => {
  return (
    <div className={cls.Stroke}>
      <div className={cls.Stroke__BG}>
        <img src={MagnifierIcon} alt="icon"  className={cls.SearchBar__icon}/>
        <input className={cls.SearchBar} placeholder={children} {...props} />
      </div>
    </div>
  )
}
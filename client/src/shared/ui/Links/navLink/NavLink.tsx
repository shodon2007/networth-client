import cls from './NavLink.module.scss'
import { LinkData } from 'src/widgets/ui/aside/types/LinksData'


export const NavLink = ({ title, icon }: LinkData) => {
  
  return (
    <li className={cls.NavLink}>
      <img src={icon} alt='Icon' />
      <h3>{title}</h3>
    </li>
  )
}
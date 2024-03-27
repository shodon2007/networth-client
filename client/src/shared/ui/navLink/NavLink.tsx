import cls from './NavLink.module.scss'
import { LinksData } from "src/entities/ui/aside/ui/NavbarTemplate"

export const NavLink = ({ title, icon }: LinksData) => {
  
  return (
    <li className={cls.NavLink}>
      <img src={icon} alt='Icon' />
      <h3>{title}</h3>
    </li>
  )
}
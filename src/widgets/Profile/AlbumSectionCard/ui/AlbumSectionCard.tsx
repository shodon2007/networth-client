import cls from './AlbumSectionCard.module.scss'
import { ButtonsList } from "../consts/ButtonsList"
import { NavLink } from "react-router-dom"

interface AlbumSectionCardProps { }

export const AlbumSectionCard = ({ }: AlbumSectionCardProps) => {
  // const user = useAppSelector(state => state.auth)

  // const [topic, setTopic] = useState<number>(0)

  return (
    <section className={cls.AlbumSection}>
      <nav className={cls.AlbumSection__nav}>
        {ButtonsList.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={item.href}
            >
              {item.title}
            </NavLink>
          )
        })}
      </nav>
      <div className={cls.AlbumSection__content}>

      </div>
    </section>
  )
}
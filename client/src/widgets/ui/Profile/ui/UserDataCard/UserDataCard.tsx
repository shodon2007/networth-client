import cls from './UserCardStyle.module.scss'
import { useAuth } from "src/shared/context/AuthProvider/useAuth"
import DetailIcon from "src/shared/assets/DetailIcon.svg"
import Mailicon from "src/shared/assets/MailIcon.svg"
import { MBtn } from "src/shared/ui/Buttons/LevelsBtn/mBtn/MBtn"

interface UserDataCardProps { }

export const UserDataCard = ({ }: UserDataCardProps) => {
  const auth = useAuth()

  // TODO: create a capability change user's data

  return (
    // Add displaying user's data
    <section className={cls.UserCard}>
      <div className={cls.UserCard__info}>
        <img
          src={auth.user?.avatar ? auth.user?.avatar : ''}
          alt="Avatar"
          className={cls.UserCard__avatar}
        />
        <ul className={cls.UserCard__userInfo}>
          <li className={cls.UserCard__name}>{auth.user.name} Hello</li>
          <li className={cls.UserCard__detail}>
            <img src={Mailicon} />
            {auth.user.email} example123@gmail.com
          </li>
          <li className={cls.UserCard__detail}>
            <img src={DetailIcon} alt="" />
            <h4>Detils</h4>
          </li>
        </ul>
      </div>
      <div>
        <MBtn primary={true}>Edit</MBtn>
      </div>
    </section>
  )
}
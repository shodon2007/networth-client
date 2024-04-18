import { useAuth } from 'src/shared/context/AuthProvider/useAuth'
import cls from './FriendsListCard.module.scss'
import { MBtn } from 'src/shared/ui/Buttons/LevelsBtn'
import FriendsIcon from 'src/shared/assets/FriendsIcon.svg'

interface FriendsListCardProps { }

export const FriendsListCard = ({ }: FriendsListCardProps) => {
  const user = useAuth()

  return (
    <section className={cls.FriendsSection}>
      <div className={cls.FriendsList}>
        <span className={cls.FriendsList__Up}>
          <img src={FriendsIcon} alt="Icon" />
          <h1>Channels: {user.user.channelList.length}</h1>
        </span>
        {user.user.friendsList.length > 4
          && <div className={cls.FriendsList__UpBtn}>
            <MBtn primary={true}>All</MBtn>
          </div>
        }
      </div>
      <ul className={cls.FriendsList}>
        {
          user.user.friendsList.map((item, index) => {
            return index < 4 && (
              <li key={index} className={cls.FriendsList__item}>
                {item.avatar
                  ? <img src={item.avatar} alt="" />
                  : <div className={cls.WhiteCircle} />
                }
                <p>
                  {item.name}
                </p>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}
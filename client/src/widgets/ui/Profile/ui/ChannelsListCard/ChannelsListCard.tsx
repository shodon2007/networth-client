import ChannelIcon from 'src/shared/assets/ChannleIcon.svg'
import cls from './ChannelsLsitCard.module.scss'
import { MBtn } from 'src/shared/ui/Buttons/LevelsBtn'
import { useAuth } from 'src/shared/context/AuthProvider/useAuth'

interface ChannelsListCardProps { }

export const ChannelsListCard = ({ }: ChannelsListCardProps) => {
  const user = useAuth()

  return (
    <section className={cls.ChanelSection}>
      <div className={cls.ChanelsList}>
        <span className={cls.ChanelsList__Up}>
          <img src={ChannelIcon} alt="Icon" />
          <h1>Channels: {user.user.channelList.length}</h1>
        </span>
        {user.user.channelList.length > 4
          && <div className={cls.ChanelsList__UpBtn}>
            <MBtn primary={true}>All</MBtn>
          </div>
        }
      </div>
      <ul className={cls.ChanelsList}>
        {
          user.user.channelList.map((item, index) => {
            return index < 4 && (
              <li key={index} className={cls.ChanelsList__item}>
                {item.avatar
                  ? <img src={item.avatar} alt="" />
                  : <div className={cls.WhiteCircle} />
                }
                <p>
                  {item.title}
                </p>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}
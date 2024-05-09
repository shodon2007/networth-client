import { LinksData } from "../ui/NavbarTemplate"
import ProfileIcon from "src/shared/assets/ProfileIcon.svg"
import FriendsIcon from 'src/shared/assets/FriendsIcon.svg'
import StoriesIcon from 'src/shared/assets/StoriesIcons.svg'
import Channelicon from 'src/shared/assets/ChannleIcon.svg'
import Musicicon from 'src/shared/assets/MusicIcon.svg'
import NotificationIcon from 'src/shared/assets/NotificationActiveicon.svg'
import Messengericon from 'src/shared/assets/ChatIcon.svg'
import SettingsIcon from 'src/shared/assets/SettingsIcon.svg'
import Gameicon from 'src/shared/assets/GameIcongamepad.svg'

export const Links: LinksData[] = [
  {
    title: "Feed",
    icon: ProfileIcon,
  },
  {
    title: "My profile",
    icon: ProfileIcon,
  },
  {
    title: "Friends",
    icon: FriendsIcon,
  },
  {
    title: "Stories",
    icon: StoriesIcon,
  },
  {
    title: "Channels",
    icon: Channelicon,
  },
  {
    title: "Music",
    icon: Musicicon,
  },
  {
    title: "Notifications",
    icon: NotificationIcon,
  },
  {
    title: "Messenger",
    icon: Messengericon,
  },
  {
    title: "Settings",
    icon: SettingsIcon,
  },
  {
    title: "Games",
    icon: Gameicon,
  },
]
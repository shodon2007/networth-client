import { ReactNode } from "react";

import ProfileIcon from "src/shared/assets/ProfileIcon.svg"
import FriendsIcon from 'src/shared/assets/FriendsIcon.svg'
import StoriesIcon from 'src/shared/assets/StoriesIcons.svg'
import Channelicon from 'src/shared/assets/ChannleIcon.svg'
import Musicicon from 'src/shared/assets/MusicIcon.svg'
import NotificationIcon from 'src/shared/assets/NotificationActiveicon.svg'
import Messengericon from 'src/shared/assets/ChatIcon.svg'
import SettingsIcon from 'src/shared/assets/SettingsIcon.svg'
import Gameicon from 'src/shared/assets/GameIcongamepad.svg'

interface Link {
    icon: string;
    title: string;
    to: string;
}

const links: Link[] = [
    {
        title: "Feed",
        icon: ProfileIcon,
        to: '/main/feed',
    },
    {
        title: "My profile",
        icon: ProfileIcon,
        to: '/main/profile',
    },
    {
        title: "Friends",
        icon: FriendsIcon,
        to: '/friends'
    },
    {
        title: "Stories",
        icon: StoriesIcon,
        to: '/stories'
    },
    {
        title: "Channels",
        icon: Channelicon,
        to: '/channels'
    },
    {
        title: "Music",
        icon: Musicicon,
        to: '/music'
    },
    {
        title: "Notifications",
        icon: NotificationIcon,
        to: '/notification'
    },
    {
        title: "Messenger",
        icon: Messengericon,
        to: '/messanger'
    },
    {
        title: "Settings",
        icon: SettingsIcon,
        to: '/settings'
    },
    {
        title: "Games",
        icon: Gameicon,
        to: '/games'
    },
]

export default links;
import {ReactNode} from "react";
import ProfileIcon from "src/shared/assets/ProfileIcon.svg?react";
import FriendsIcon from "src/shared/assets/FriendsIcon.svg?react";
import StoriesIcon from "src/shared/assets/StoriesIcons.svg?react";
import Channelicon from "src/shared/assets/ChannleIcon.svg?react";
import Musicicon from "src/shared/assets/MusicIcon.svg?react";
import NotificationIcon from "src/shared/assets/NotificationActiveicon.svg?react";
import Messengericon from "src/shared/assets/ChatIcon.svg?react";
import SettingsIcon from "src/shared/assets/SettingsIcon.svg?react";
import GameIcon from "src/shared/assets/GameIcongamepad.svg?react";
interface Link {
	icon: ReactNode;
	title: string;
	to: string;
}

const links: Link[] = [
	{
		title: "Feed",
		icon: <ProfileIcon />,
		to: "/",
	},
	{
		title: "My profile",
		icon: <ProfileIcon />,
		to: "/profile",
	},
	{
		title: "Friends",
		icon: <FriendsIcon />,
		to: "/friends",
	},
	{
		title: "Stories",
		icon: <StoriesIcon />,
		to: "/stories",
	},
	{
		title: "Channels",
		icon: <Channelicon />,
		to: "/channels",
	},
	{
		title: "Music",
		icon: <Musicicon />,
		to: "/music",
	},
	{
		title: "Notifications",
		icon: <NotificationIcon />,
		to: "/notification",
	},
	{
		title: "Messenger",
		icon: <Messengericon />,
		to: "/messanger",
	},
	{
		title: "Settings",
		icon: <SettingsIcon />,
		to: "/settings",
	},
	{
		title: "Games",
		icon: <GameIcon />,
		to: "/games",
	},
];

export default links;

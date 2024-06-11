import { ReactNode } from "react";
// import Channelicon from "src/shared/assets/ChannleIcon.svg?react";
import Messengericon from "src/shared/assets/ChatIcon.svg?react";
// import FriendsIcon from "src/shared/assets/FriendsIcon.svg?react";
// import GameIcon from "src/shared/assets/GameIcongamepad.svg?react";
// import Musicicon from "src/shared/assets/MusicIcon.svg?react";
// import NotificationIcon from "src/shared/assets/NotificationActiveicon.svg?react";
import ProfileIcon from "src/shared/assets/ProfileIcon.svg?react";
// import SettingsIcon from "src/shared/assets/SettingsIcon.svg?react";
// import StoriesIcon from "src/shared/assets/StoriesIcons.svg?react";

interface Link {
  icon: ReactNode;
  title: string;
  to: string;
}

const links: Link[] = [
	{
		title: "sidebar.feed",
		icon: <ProfileIcon />,
		to: "/",
	},
	{
		title: "sidebar.myProfile",
		icon: <ProfileIcon />,
		to: "/profile",
	},
	// {
	//   title: "sidebar.friends",
	//   icon: <FriendsIcon />,
	//   to: "/friends",
	// },
	// {
	//   title: "sidebar.stories",
	//   icon: <StoriesIcon />,
	//   to: "/stories",
	// },
	// {
	//   title: "sidebar.channels",
	//   icon: <Channelicon />,
	//   to: "/channels",
	// },
	// {
	//   title: "sidebar.music",
	//   icon: <Musicicon />,
	//   to: "/music",
	// },
	// {
	//   title: "sidebar.notifications",
	//   icon: <NotificationIcon />,
	//   to: "/notification",
	// },
	{
		title: "sidebar.messanger",
		icon: <Messengericon />,
		to: "/messanger",
	},
	// {
	//   title: "sidebar.settings",
	//   icon: <SettingsIcon />,
	//   to: "/settings",
	// },
	// {
	//   title: "sidebar.games",
	//   icon: <GameIcon />,
	//   to: "/games",
	// },
];

export default links;

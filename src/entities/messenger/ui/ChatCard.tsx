import {Link} from "react-router-dom";
import {SettingsButton} from "src/shared/ui/Buttons/SettingsBtn/SettingsButton";
import cls from "./ChatCard.module.scss";
import { ChatCardProps } from "src/shared/types/messenger/ChatType";


export const ChatCard = ({nickname, icon, href}: ChatCardProps) => {
	return (
		<div className={cls.chatCard}>
			<header className={cls.header}>
				<div className={cls.user}>
					<img
						className={cls.avatar}
						src={icon}
						alt="avatar"
						width="60"
						height="60"
					/>
					<h1 className={cls.user__nickname}>{nickname}</h1>
				</div>
				<SettingsButton border={true} />
			</header>
			<footer className={cls.footer}>
				{/*  Last message ?? start chat button */}
				<Link to={href} className={cls.button}>
					Start chatting
				</Link>
			</footer>
		</div>
	);
};

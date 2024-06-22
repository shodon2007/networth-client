import {Link} from "react-router-dom";
import {SettingsButton} from "src/shared/ui/Buttons/SettingsBtn/SettingsButton";
import cls from "./ChatCard.module.scss";

interface ChatCardProps {
	nikcname: string;
	icon: string;
	href: string;
}

export const ChatCard = ({nikcname, icon, href}: ChatCardProps) => {
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
					<h1 className={cls.user__nickname}>{nikcname}</h1>
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

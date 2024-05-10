import {Link} from "react-router-dom";
import cls from "./ChatCard.module.scss";
import {SettingsButton} from "../../Buttons/SettingsBtn/SettingsButton";

interface ChatCardProps {
	nikcname: string;
	icon: any;
	href: string;
}

export const ChatCard = ({nikcname, icon, href}: ChatCardProps) => {
	return (
		<Link to={href} className={cls.ChatCard}>
			<header className={cls.ChatCard__header}>
				<div className={cls.user}>
					<img className={cls.user__avatar} src={icon} alt="avatar" />
					<h1 className={cls.user__nickname}>{nikcname}</h1>
				</div>
				<SettingsButton border={true} />
			</header>
			<footer className={cls.ChatCard__footer}>
				{/*  Last message ?? start chat button */}
			</footer>
		</Link>
	);
};

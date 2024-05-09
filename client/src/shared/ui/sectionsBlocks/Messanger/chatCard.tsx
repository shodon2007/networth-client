import {ReactSVGElement} from "react";
import {Link} from "react-router-dom";
import cls from "./ChatCard.module.scss";
import classNames from "src/shared/lib/classNames";

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
				{/* Settings button */}
			</header>
			<footer className={cls.ChatCard__footer}>
				{/*  Last messaeg ?? start chat button */}
			</footer>
		</Link>
	);
};

import {FC} from "react";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import {getUser} from "src/entities/user";
import classNames from "src/shared/lib/classNames";
import {useAppSelector} from "src/shared/lib/store";
import MyLink from "src/shared/ui/Link/Link";

import links from "../model/Links";

import cls from "./Sidebar.module.scss";

export interface LinksData {
	title: string;
	icon: string;
}
interface NavbarTemplateProps {}

const Sidebar: FC<NavbarTemplateProps> = () => {
	const {t} = useTranslation();
	const {user} = useAppSelector(getUser);

	return (
		<aside className={cls.sidebar}>
			<header className={cls.header}>
				<img src={user?.avatar} alt="avatar" className={cls.avatar} />
				{user ? (
					<h1 className={cls.username}>
						<span>{user.name}</span>
						<span>{user.surname}</span>
					</h1>
				) : (
					<div className={cls.header_links}>
						<MyLink to={"/login"}>Войти</MyLink>
						<MyLink to={"/login"}>Зарегестрироваться</MyLink>
					</div>
				)}
			</header>
			<nav className={cls.navbar}>
				{links.map((link) => {
					return (
						<NavLink
							to={link.to}
							key={link.to}
							className={({isActive}) =>
								classNames(cls.navLink, {[cls.navLinkActive]: isActive})
							}
						>
							<div className={cls.logo}>{link.icon}</div>
							<span className={cls.title}>{t(link.title)}</span>
						</NavLink>
					);
				})}
			</nav>
		</aside>
	);
};

export default Sidebar;

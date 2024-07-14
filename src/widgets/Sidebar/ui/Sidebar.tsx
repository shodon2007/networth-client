import {FC} from "react";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import {useUser} from "src/entities/user";
import classNames from "src/shared/lib/classNames";
import MyLink from "src/shared/ui/Link/Link";

import links from "../model/Links";

import cls from "./Sidebar.module.scss";

export interface LinksData {
	title: string;
	icon: string;
}
interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
	const {t} = useTranslation();
	const user = useUser();

	const {data: userData} = user ?? {};

	return (
		<aside className={cls.sidebar}>
			<header className={cls.header}>
				<img src={userData?.avatar} alt="avatar" className={cls.avatar} />
				{userData ? (
					<h1 className={cls.username}>
						<span>{userData.name}</span>
						<span>{userData.surname}</span>
					</h1>
				) : (
					<div className={cls.headerLinks}>
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

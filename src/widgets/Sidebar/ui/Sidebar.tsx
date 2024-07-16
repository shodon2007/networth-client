import {FC} from "react";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import classNames from "src/shared/lib/classNames";

import links from "../model/Links";

import cls from "./Sidebar.module.scss";

export interface LinksData {
	title: string;
	icon: string;
}
interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
	const {t} = useTranslation();
	return (
		<aside className={cls.sidebar}>
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

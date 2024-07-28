import {FC, useMemo} from "react";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import classNames from "src/shared/lib/classNames";

import {useUser} from "src/entities/user";
import {privateRoutes, publicRoutes} from "src/shared/config/routeConfig";
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
	const userLinks = useMemo(() => {
		const routes = user.isAuth ? privateRoutes : publicRoutes;
		return links.filter((link) =>
			routes.find((route) => route.path === link.to),
		);
	}, [user]);
	return (
		<aside className={cls.sidebar}>
			{userLinks.map((link) => {
				const to = link.to.replace("/*", "");
				return (
					<NavLink
						to={to}
						key={to}
						className={({isActive}) =>
							classNames(cls.navLink, {[cls.navLinkActive]: isActive})
						}
					>
						<div className={cls.logo}>{link.icon}</div>
						<span className={cls.title}>{t(link.title)}</span>
					</NavLink>
				);
			})}
		</aside>
	);
};

export default Sidebar;

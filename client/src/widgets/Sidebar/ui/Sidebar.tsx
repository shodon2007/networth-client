import {FC} from "react";
import links from "../model/Links";
import {NavLink} from "react-router-dom";
import classNames from "src/shared/lib/classNames";

import cls from "./Sidebar.module.scss";
import { RootState } from "@reduxjs/toolkit/query";
import { useAppSelector } from "src/shared/lib/Redux/model";

export interface LinksData {
	title: string;
	icon: string;
}

const baronImg =
	"data:image/webp;base64,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";

interface NavbarTemplateProps {}

const Sidebar: FC<NavbarTemplateProps> = () => {
	const user = useAppSelector(state => state.auth)
	return (
		<aside className={cls.sidebar}>
			<header className={cls.header}>
				{/*TODO: add avatr from the auth context to here*/}
				<img src={baronImg} alt="avatar" className={cls.avatar} />
				<h1 className={cls.username}>{user.user?.email ?? 'Этого имени не должно быть т.к. user не зареган'}</h1>
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
							<span className={cls.title}>{link.title}</span>
						</NavLink>
					);
				})}
			</nav>
		</aside>
	);
};

export default Sidebar;

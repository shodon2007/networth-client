import {FC} from "react";
import links from "../model/Links";
import {NavLink} from "react-router-dom";
import classNames from "src/shared/lib/classNames";

import cls from "./Sidebar.module.scss";

export interface LinksData {
	title: string;
	icon: string;
}

interface NavbarTemplateProps {}

const Sidebar: FC<NavbarTemplateProps> = () => {
	return (
		<aside className={cls.sidebar}>
			<header className={cls.header}>
				{/*TODO: add avatr from the auth context to here*/}
				<img src="" alt="avatar" className={cls.avatar} />
				<h1 className={cls.username}>ZXC Baron</h1>
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
							<img src={link.icon} className={cls.icon} />
							<span className={cls.title}>{link.title}</span>
						</NavLink>
					);
				})}
			</nav>
		</aside>
	);
};

export default Sidebar;

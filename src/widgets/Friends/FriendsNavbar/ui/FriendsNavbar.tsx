import {NavLink, useLocation} from "react-router-dom";
import Block from "src/shared/ui/Block/Block";
import cls from "./FriendsNavbar.module.scss";
import classNames from "src/shared/lib/classNames";
import {useMemo, useState} from "react";
import {friendRoutes} from "src/entities/friends";

const FriendsNavbar = () => {
	const {pathname} = useLocation();

	const routeLinks = useMemo(() => {
		return friendRoutes
			.filter((el) => el.title !== undefined)
			.map(({title, path}) => (
				<NavLink
					key={path}
					className={classNames(cls.link, {
						[cls.linkActive]:
							pathname.replace("/friends", "").replace("/", "") === path,
					})}
					to={path}
					children={title}
				/>
			));
	}, [pathname]);
	return <Block className={cls.aside}>{routeLinks}</Block>;
};

export default FriendsNavbar;

import {NavLink, useLocation} from "react-router-dom";
import Block from "src/shared/ui/Block/Block";
import cls from "./FriendsNavbar.module.scss";
import classNames from "src/shared/lib/classNames";
import {useMemo, useState} from "react";
const routes = [
	{
		to: "",
		title: "My friends",
	},
	{
		to: "requests",
		title: "Requests",
	},
	{
		to: "findUsers",
		title: "Find Friends",
	},
];
const FriendsNavbar = () => {
	const {pathname} = useLocation();
	const [selectedMenu, setSelectedMenu] = useState<{to: string; title: string}>(
		routes.find((el) => el.to === pathname),
	);
	const routeLinks = useMemo(() => {
		setSelectedMenu(routes.find((el) => el.to === pathname));
		return routes.map(({title, to}) => (
			<NavLink
				key={to}
				className={classNames(cls.link, {
					[cls.linkActive]:
						pathname.replace("/friends", "").replace("/", "") === to,
				})}
				to={to}
				children={title}
			/>
		));
	}, [pathname]);
	return <Block className={cls.aside}>{routeLinks}</Block>;
};

export default FriendsNavbar;

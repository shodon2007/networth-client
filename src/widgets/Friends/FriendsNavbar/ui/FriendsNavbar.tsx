import {NavLink, NavLinkRenderProps, useLocation} from "react-router-dom";
import Block from "src/shared/ui/Block/Block";
import cls from "./FriendsNavbar.module.scss";
import classNames from "src/shared/lib/classNames";

const FriendsNavbar = () => {
	const {pathname} = useLocation();

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
	return (
		<Block className={cls.aside}>
			{routes.map(({title, to}) => (
				<NavLink
					className={classNames(cls.link, {
						[cls.linkActive]:
							pathname.replace("/friends", "").replace("/", "") === to,
					})}
					to={to}
					children={title}
				/>
			))}
		</Block>
	);
};

export default FriendsNavbar;

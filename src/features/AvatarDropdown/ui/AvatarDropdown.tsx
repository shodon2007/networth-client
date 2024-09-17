import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { routePath } from "src/shared/config/routeConfig";
import getAvatarUrl from "src/shared/lib/getAvatar/getAvatar";
import { useUser } from "src/entities/user";
import Block from "src/shared/ui/Block/Block";
import { useTheme } from "src/shared/lib/theme";
import classNames from "src/shared/lib/classNames";
import cls from "./AvatarDrodown.module.scss";

const AvatarDropdown: FC = () => {
	const user = useUser();
	const { theme } = useTheme();
	const { data: userData } = user ?? {};

	const authDropdownList = [
		{
			href: routePath.profile,
			label: "Profile",
		},
	];

	const noAuthDropdownList = [
		{
			href: routePath.registration,
			label: "Auth",
		},
	];
	return (
		<Menu>
			<MenuButton className={cls.menuButton}>
				<div className={cls.rightAvatar}>
					<img
						src={getAvatarUrl(userData?.avatar)}
						alt="avatar"
						className={cls.avatar}
					/>
				</div>
			</MenuButton>
			<MenuItems
				className={classNames(cls.dropdownItems, {}, [theme])}
				anchor="bottom"
			>
				<Block>
					{user && user.isAuth
						? authDropdownList.map((item) => {
							return (
								<MenuItem key={item.href}>
									<Link to={item.href}>{item.label}</Link>
								</MenuItem>
							);
						})
						: noAuthDropdownList.map((item) => {
							return (
								<MenuItem key={item.href}>
									<Link to={item.href}>{item.label}</Link>
								</MenuItem>
							);
						})}
				</Block>
			</MenuItems>
		</Menu>
	);
};

export default AvatarDropdown;

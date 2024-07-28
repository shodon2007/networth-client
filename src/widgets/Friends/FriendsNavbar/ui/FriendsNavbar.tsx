import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {useCallback, useMemo} from "react";
import {Select} from "@headlessui/react";
import {useTranslation} from "react-i18next";
import {friendRoutes} from "src/entities/friends";
import classNames from "src/shared/lib/classNames";
import Block from "src/shared/ui/Block/Block";
import i18n from "src/shared/config/i18n/i18n";
import cls from "./FriendsNavbar.module.scss";

const FriendsNavbar = () => {
	const {pathname} = useLocation();
	const navigate = useNavigate();
	const {t} = useTranslation();

	const getFriendPageName = useCallback(() => {
		return pathname.replace("/friends", "").replace("/", "");
	}, [pathname]);

	const changePage = (pageName: string) => {
		navigate(pageName);
	};

	const routeLinks = useMemo(() => {
		return friendRoutes
			.filter((el) => el.title !== undefined)
			.map(({title, path}) => {
				console.log(`friends-navbar-button-${path}`);
				return (
					<NavLink
						key={path}
						data-testid={`friends-navbar-button-${path}`}
						className={classNames(cls.link, {
							[cls.linkActive]: getFriendPageName() === path,
						})}
						to={path}
					>
						{t(title)}
					</NavLink>
				);
			});
	}, [pathname, i18n.language]);
	return (
		<div className={cls.friendNavbar} data-testid="friends-navbar">
			<Block className={cls.aside}>{routeLinks}</Block>
			<Select
				name="status"
				data-testid="friends-navbar-dropdown"
				onChange={(e) => changePage(e.target.value)}
				value={getFriendPageName()}
				className={cls.asideMobile}
				aria-label="Project status"
			>
				{friendRoutes
					.filter((el) => el.title !== undefined)
					.map((el) => (
						<option key={el.path} value={el.path}>
							{t(el.title)}
						</option>
					))}
			</Select>
		</div>
	);
};

export default FriendsNavbar;

import NetWorth from "src/shared/assets/NetWorthLogo.svg";
import {SearchBar} from "src/features/SearchBar/";

import {ThemeSwitcher} from "src/features/ThemeSwitcher";
import {ToggleLanguage} from "src/features/ToggleLanguage";
import {useUser} from "src/entities/user";
import MyLink from "src/shared/ui/Link/Link";
import {routePath} from "src/shared/config/routeConfig";
import getAvatarUrl from "src/shared/lib/getAvatar/getAvatar";
import {AvatarDropdown} from "src/features/AvatarDropdown";
import cls from "./Header.module.scss";

export const Header = () => {
	const user = useUser();
	const {data: userData} = user ?? {};

	return (
		<div className={cls.header}>
			<div className={cls.left}>
				<img src={NetWorth} className={cls.logo} />
				<SearchBar />
			</div>
			<ThemeSwitcher />
			<ToggleLanguage />
			<AvatarDropdown />
		</div>
	);
};

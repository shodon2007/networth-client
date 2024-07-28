import NetWorth from "src/shared/assets/NetWorthLogo.svg";
import {SearchBar} from "src/features/SearchBar/";

import cls from "./Header.module.scss";
import {ThemeSwitcher} from "src/features/ThemeSwitcher";
import {ToggleLanguage} from "src/features/ToggleLanguage";
import {useUser} from "src/entities/user";
import MyLink from "src/shared/ui/Link/Link";
import {routePath} from "src/shared/config/routeConfig";
import getAvatarUrl from "src/shared/lib/getAvatar/getAvatar";
import Button from "src/shared/ui/Button/Button";
import {logout} from "src/entities/user/services/userSlice";
import {useAppDispatch} from "src/shared/lib/store";
import {Navigate, useNavigate} from "react-router-dom";

export const Header = () => {
	const user = useUser();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const {data: userData} = user ?? {};

	return (
		<div className={cls.header}>
			<div className={cls.left}>
				<img src={NetWorth} className={cls.logo} />
				<SearchBar />
			</div>
			<ThemeSwitcher />
			<ToggleLanguage />
			<div className={cls.rightAvatar}>
				{userData ? (
					<img
						src={getAvatarUrl(userData.avatar)}
						alt="avatar"
						className={cls.avatar}
					/>
				) : (
					<div className={cls.headerLinks}>
						<MyLink to={routePath.login}>Войти</MyLink>
						<MyLink to={routePath.registration}>Зарегестрироваться</MyLink>
					</div>
				)}
			</div>
		</div>
	);
};

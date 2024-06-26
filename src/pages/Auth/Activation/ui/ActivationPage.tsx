import {FC} from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {toast} from "react-toastify";
import {RootState} from "src/app/providers/storeProvider";
import Block from "src/shared/ui/Block/Block";
import MyLink from "src/shared/ui/Link/Link";
import {routePath} from "src/shared/config/routeConfig";

import cls from "./ActivationPage.module.scss";

const ActivationPage: FC = () => {
	const user = useSelector((state: RootState) => state.user);

	if (!user) {
		toast.info("Пожалуйста авторизуйтесь");
		return <Navigate to={"/login"} />;
	}

	if (user.data?.isActivated === 1) {
		toast.info("Вы подтвердили почту");
		return <Navigate to={"/"} />;
	}

	return (
		<div data-testid="activation-page">
			<Block className={cls.MainBlock}>
				<h1>Hello</h1>
				<span className={cls.EmailNotification}>
					На почту{" "}
					<span data-testid="activation-email" style={{fontWeight: "bold"}}>
						{user.data?.email}
					</span>{" "}
					отправлена ссылка для подтветждения
				</span>
				<ul className={cls.LinksList}>
					<MyLink to={routePath.home}>Home</MyLink>
					<MyLink to={routePath.profile}>Profile</MyLink>
				</ul>
			</Block>
		</div>
	);
};

export default ActivationPage;

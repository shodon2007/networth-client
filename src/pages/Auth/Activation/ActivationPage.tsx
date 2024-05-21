import {FC} from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {toast} from "react-toastify";
import {RootState} from "src/app/providers/storeProvider";
import Block from "src/shared/ui/Block/Block";
import MyLink from "src/shared/ui/Link/Link";
import cls from './ActivationPage.module.scss'

const ActivationPage: FC = () => {
	const user = useSelector((state: RootState) => state.user);
	console.log(user);
	if (user.user?.isActivated === 1) {
		toast.info("Вы подтвердили почту");
		return <Navigate to={"/"} />;
}
	return (
		<Block className={cls.MainBlock}>
			<h1>Hello</h1>
			<span className={cls.EmailNotification}>
				На почту {user.user?.email} отправлена ссылка для подтветждения
			</span>
			<ul className={cls.LinksList}>
				<MyLink to="/">Home</MyLink>
				<MyLink to="/profile">Profile</MyLink>
			</ul>
		</Block>
	);
};

export default ActivationPage;

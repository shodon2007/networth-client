import {FC} from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {toast} from "react-toastify";
import {RootState} from "src/app/providers/storeProvider";
import Block from "src/shared/ui/Block/Block";

const ActivationPage: FC = () => {
	const user = useSelector((state: RootState) => state.user);
	console.log(user);
	if (user.user?.isActivated === 1) {
		toast.info("Вы подтвердили почту");
		return <Navigate to={"/"} />;
	}
	return (
		<Block>
			<h1>Hello</h1>
			<span>
				На почту {user.user?.email} отправлена ссылка для подтветждения
			</span>
		</Block>
	);
};

export default ActivationPage;

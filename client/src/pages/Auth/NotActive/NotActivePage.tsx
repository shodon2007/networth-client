import {FC} from "react";
import {useSelector} from "react-redux";
import {RootState} from "src/app/providers/storeProvider";
import Block from "src/shared/ui/Block/Block";

const NotActivePage: FC = () => {
	const user = useSelector((state: RootState) => state.user);
	return (
		<Block>
			<span>
				На почту {user.user?.email} отправлена ссылка для подтветждения
			</span>
		</Block>
	);
};

export default NotActivePage;

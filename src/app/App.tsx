import {FC, useEffect} from "react";
import {ToastContainer} from "react-toastify";
import {setUserInfo} from "src/entities/user/services/userSlice";
import classNames from "src/shared/lib/classNames";
import {useAppDispatch} from "src/shared/lib/store";
import {useTheme} from "src/shared/lib/theme/hooks/useTheme";
import {useGetUserInfo} from "src/entities/user/hooks/useInitUserInfo";

import {AppRouter} from "./providers/router";

const App: FC = () => {
	const {theme} = useTheme();
	const dispatch = useAppDispatch();
	const {data} = useGetUserInfo();

	useEffect(() => {
		if (data) {
			dispatch(setUserInfo(data.data));
		}
	}, [data]);

	return (
		<div className={classNames("app", {}, [theme])}>
			<ToastContainer />
			<AppRouter />
		</div>
	);
};

export default App;

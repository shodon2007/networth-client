import {FC, useEffect} from "react";
import {ToastContainer} from "react-toastify";
import {userApi} from "src/entities";
import {setUserInfo} from "src/entities/user/services/userSlice";
import classNames from "src/shared/lib/classNames";
import {useAppDispatch} from "src/shared/lib/store";
import {useTheme} from "src/shared/lib/theme/hooks/useTheme";

import {AppRouter} from "./providers/router";

const App: FC = () => {
	const {theme} = useTheme();
	const dispatch = useAppDispatch();
	const {data} = userApi.useFetchUserInfoQuery("any");

	useEffect(() => {
		console.log("data changed");
		if (data) {
			dispatch(setUserInfo(data));
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

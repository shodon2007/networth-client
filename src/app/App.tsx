import {FC, useEffect} from "react";
import {AppRouter} from "./providers/router";
import classNames from "src/shared/lib/classNames";
import {useTheme} from "src/shared/lib/theme/hooks/useTheme";
import {ToastContainer} from "react-toastify";
import {useAppDispatch} from "src/shared/lib/store";
import {userApi} from "src/entities";
import {setUserInfo} from "src/entities/User/services/userSlice";

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

import {FC, useEffect} from "react";
import {AppRouter} from "./providers/router";
import classNames from "src/shared/lib/classNames";
import {useTheme} from "src/shared/lib/theme/hooks/useTheme";
import {ToastContainer} from "react-toastify";
import {useAppDispatch, useAppSelector} from "src/shared/lib/store";
import {userApi} from "src/entities";
import {setUserInfo} from "src/entities/User/services/userSlice";
import {getAccessToken} from "src/entities/User";

const App: FC = () => {
	const {theme} = useTheme();
	const dispatch = useAppDispatch();
	const accessToken = useAppSelector(getAccessToken);
	const {data} = userApi.useFetchUserInfoQuery(String(accessToken));

	useEffect(() => {
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

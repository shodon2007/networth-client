import {FC, useEffect} from "react";
import {
	setUserInfo,
	setUserInfoLoading,
} from "src/entities/user/services/userSlice";
import classNames from "src/shared/lib/classNames";
import {useAppDispatch} from "src/shared/lib/store";
import {useTheme} from "src/shared/lib/theme/hooks/useTheme";
import {useGetUserInfo} from "src/entities/user/hooks/useGetUserInfo";

import {useRefreshToken} from "src/entities/user";
import {useUserAccessToken} from "src/entities/user/hooks/useGetAccessToken";
import {AppRouter} from "./providers/router";

const App: FC = () => {
	const accessToken = useUserAccessToken();
	const {theme} = useTheme();
	const dispatch = useAppDispatch();
	const {data, isLoading, isError, error} = useGetUserInfo(accessToken);
	const refreshToken = useRefreshToken();

	useEffect(() => {
		if (isError) {
			refreshToken.mutate(error);
		}
	}, [error]);

	useEffect(() => {
		if (data) {
			dispatch(setUserInfo(data));
		}
		if (!isLoading && !data) {
			dispatch(setUserInfoLoading(false));
		}
	}, [isLoading]);

	return (
		<div className={classNames("app", {}, [theme])}>
			<AppRouter />
		</div>
	);
};

export default App;

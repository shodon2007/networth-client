import {RootState} from "src/app/providers/storeProvider";

export const getAccessToken = (state: RootState) => {
	return state.user.accessToken;
};

export const getUser = (state: RootState) => {
	return state.user;
};

import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import { UserTypes } from "src/shared/types/user/userTypes";
import {AuthResponse} from "../model/Auth";

interface InitialState {
	accessToken: string | null;
	refreshToken: string | null;
	isAuth: boolean;
	user: UserTypes | undefined;
}

const initialState: InitialState = {
	accessToken: getAccessTokenFromStorage(),
	refreshToken: null,
	isAuth: false,
	user: undefined,
};

const userSlice = createSlice({
	initialState,
	name: "userStore",
	reducers: {
		setUser(state, action: PayloadAction<AuthResponse>) {
			const accessToken = action.payload.accessToken;
			const refreshToken = action.payload.refreshToken;
			localStorage.setItem("user", JSON.stringify({accessToken, refreshToken}));

			state.accessToken = action.payload.accessToken;
			state.refreshToken = action.payload.refreshToken;
			state.user = action.payload.user;
			state.isAuth = true;
		},
		setUserInfo(state, action: PayloadAction<UserTypes>) {
			state.user = action.payload;
			state.isAuth = true;
		},
	},
});

function getAccessTokenFromStorage() {
	const user = localStorage.getItem("user");
	if (!user) {
		return null;
	}
	const {accessToken} = JSON.parse(user);
	return accessToken;
}

export const {setUser, setUserInfo} = userSlice.actions;
export default userSlice.reducer;

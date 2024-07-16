import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {AuthResponse} from "src/entities/auth/model/authTypes";
import {authInstance} from "src/shared/api/auth-instance/auth-instance";
import {UserInfoTypes} from "src/shared/types/user/userInfoTypes";
import {refreshToken} from "../api/userApi";

export interface UserStateTypes {
	accessToken: string | null;
	refreshToken: string | null;
	isAuth: boolean;
	data: UserInfoTypes | undefined;
	isUserDataLoading: boolean;
}

const initialState: UserStateTypes = {
	accessToken: getAccessTokenFromStorage(),
	refreshToken: getRefreshTokenFromStorage(),
	isAuth: false,
	data: undefined,
	isUserDataLoading: true,
};

const userSlice = createSlice({
	name: "userStore",
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<AuthResponse>) {
			console.log("update user, setUser");
			const accessToken = action.payload.accessToken;
			const refreshToken = action.payload.refreshToken;
			document.cookie = `user=${JSON.stringify({accessToken, refreshToken})}`;
			localStorage.setItem("user", JSON.stringify({accessToken, refreshToken}));

			state.accessToken = action.payload.accessToken;
			state.refreshToken = action.payload.refreshToken;
			state.data = action.payload.user ?? null;
			if (action.payload.user) {
				state.isUserDataLoading = false;
			}
			state.isAuth = true;
		},
		setUserInfo(state, action: PayloadAction<UserInfoTypes>) {
			console.log("update user, setUserInfo");
			state.data = action.payload;
			state.isUserDataLoading = false;
			state.isAuth = true;
		},
		setUserInfoLoading(state, action: PayloadAction<boolean>) {
			console.log("update user, setUserLoading");
			state.isUserDataLoading = action.payload;
		},
		updateAccessToken(state, action: PayloadAction<string>) {
			console.log("update user, updateAccessToken");
			state.accessToken = action.payload;
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

function getRefreshTokenFromStorage() {
	const user = localStorage.getItem("user");
	if (!user) {
		return null;
	}
	const {refreshToken} = JSON.parse(user);
	return refreshToken;
}

export const {setUser, setUserInfo, setUserInfoLoading, updateAccessToken} =
	userSlice.actions;
export default userSlice.reducer;

import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {AuthResponse} from "src/entities/auth/model/authTypes";
import {UserInfoTypes} from "src/shared/types/user/userInfoTypes";

export interface UserStateTypes {
	accessToken: string | null;
	refreshToken: string | null;
	isAuth: boolean;
	data: UserInfoTypes | undefined;
	isUserDataLoading: boolean;
}

const initialState: UserStateTypes = {
	accessToken: getAccessTokenFromStorage(),
	refreshToken: null,
	isAuth: false,
	data: undefined,
	isUserDataLoading: true,
};

const userSlice = createSlice({
	name: "userStore",
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<AuthResponse>) {
			const accessToken = action.payload.accessToken;
			const refreshToken = action.payload.refreshToken;
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
			state.data = action.payload;
			state.isUserDataLoading = false;
			state.isAuth = true;
		},
		setUserInfoLoading(state, action: PayloadAction<boolean>) {
			state.isUserDataLoading = action.payload;
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

export const {setUser, setUserInfo, setUserInfoLoading} = userSlice.actions;
export default userSlice.reducer;

import {combineReducers} from "@reduxjs/toolkit";
import {themeReducer} from "src/app/providers/themeProvider";
import {userApi} from "src/entities";
import {profileApi} from "src/entities/Profile";
import userSlice from "src/entities/User/services/userSlice";

export const rootReducer = combineReducers({
	theme: themeReducer,
	[userApi.reducerPath]: userApi.reducer,
	[profileApi.reducerPath]: profileApi.reducer,
	user: userSlice,
});

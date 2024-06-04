import {combineReducers} from "@reduxjs/toolkit";
import {themeReducer} from "src/app/providers/themeProvider";
import userSlice from "src/entities/user/services/userSlice";

export const rootReducer = combineReducers({
	theme: themeReducer,
	user: userSlice,
});

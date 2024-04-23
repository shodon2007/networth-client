import {combineReducers} from "@reduxjs/toolkit";
import AuthSlice from "src/shared/lib/Auth/helper/AuthSlice";
import { themeReducer } from "src/shared/lib/theme/helper/themeSlice";

export const rootReducer = combineReducers({
	theme: themeReducer,
	auth: AuthSlice
});
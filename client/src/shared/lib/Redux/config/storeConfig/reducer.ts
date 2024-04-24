import {Reducer, combineReducers} from "@reduxjs/toolkit";
import { userApi, userSlice } from "src/entities";
import AuthSlice from "src/shared/lib/Auth/helper/AuthSlice";
import { themeReducer } from "src/shared/lib/theme/helper/themeSlice";

export const rootReducer: Reducer = combineReducers({
	theme: themeReducer,
	auth: AuthSlice,
	[userApi.reducerPath]: userApi.reducer,
  user: userSlice,
});
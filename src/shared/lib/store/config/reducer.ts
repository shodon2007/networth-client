import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {RootState} from "src/app/providers/storeProvider";
import {themeReducer} from "src/app/providers/themeProvider";
import userSlice from "src/entities/user/services/userSlice";

export const rootReducer = combineReducers({
	theme: themeReducer,
	user: userSlice,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
	});
};

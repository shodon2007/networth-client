import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "src/shared/lib/store/config/reducer";
import {userApi} from "src/entities";
import {setupListeners} from "@reduxjs/toolkit/query";
import {profileApi} from "src/entities/Profile";

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware()
			.concat(userApi.middleware)
			.concat(profileApi.middleware);
	},
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./reducer";
import {userApi} from "src/entities";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(userApi.middleware);
	},
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
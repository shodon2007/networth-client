import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./reducer";
import {userApi} from "src/entities";
import { setupListeners } from "@reduxjs/toolkit/query";
import { GetDefaultMiddleware } from "node_modules/@reduxjs/toolkit/dist/getDefaultMiddleware";

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware: GetDefaultMiddleware) => {
		return getDefaultMiddleware().concat(userApi.middleware);
	},
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
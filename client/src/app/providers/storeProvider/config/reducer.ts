import {combineReducers} from "@reduxjs/toolkit";
import {themeReducer} from "src/app/providers/themeProvider";

export const rootReducer = combineReducers({
	theme: themeReducer,
});

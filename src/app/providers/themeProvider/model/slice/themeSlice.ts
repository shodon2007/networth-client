import {createSlice} from "@reduxjs/toolkit";
import {Themes} from "src/shared/lib/theme/const/theme";

interface ThemeType {
	theme: Themes;
}

const initialState: ThemeType = {
	theme: (localStorage.getItem("theme") as Themes) ?? Themes.DARK,
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setTheme: (state, action) => {
			state.theme = action.payload;
			localStorage.setItem("theme", action.payload);
		},
	},
});

export const {setTheme} = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

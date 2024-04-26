import {createSlice} from "@reduxjs/toolkit";
import {Themes} from "src/shared/lib/theme/types/theme";

interface ThemeType {
	theme: Themes;
}

const initialState: ThemeType = {
	theme: Themes.DARK,
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setTheme: (state, action) => {
			state.theme = action.payload;
		},
	},
});

export const {setTheme} = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
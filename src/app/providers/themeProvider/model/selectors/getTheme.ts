import {RootState} from "src/app/providers/storeProvider";

export const getTheme = (state: RootState) => {
	return state.theme.theme;
};

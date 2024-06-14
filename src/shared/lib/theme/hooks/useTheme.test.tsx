// eslint-disable-next-line no-unused-vars , @typescript-eslint/no-unused-vars
import {useAppSelector, useAppDispatch} from "src/shared/lib/store";
import {Themes} from "src/shared/lib/theme";
import {useTheme} from "./useTheme";

jest.mock("src/shared/lib/store");

interface mockDispatchAction {
	type: string;
	payload: Themes;
}

describe("Testing useTheme", () => {
	(useAppDispatch as unknown as jest.Mock).mockReturnValue(
		({payload: newTheme}: mockDispatchAction) => {
			(useAppSelector as unknown as jest.Mock).mockReturnValue(newTheme);
		},
	);
	test("testing useTheme toggle from dark to light", () => {
		(useAppSelector as unknown as jest.Mock).mockReturnValue(Themes.LIGHT);
		expect(useTheme().theme).toBe(Themes.LIGHT);
		expect(useTheme().theme).toBe(Themes.LIGHT);
		useTheme().toggleTheme();
		expect(useTheme().theme).toBe(Themes.DARK);
		expect(useTheme().theme).toBe(Themes.DARK);
		useTheme().toggleTheme();
		expect(useTheme().theme).toBe(Themes.LIGHT);
		expect(useTheme().theme).toBe(Themes.LIGHT);
	});
	test("testing useTheme toggle from light to dark", () => {
		(useAppSelector as unknown as jest.Mock).mockReturnValue(Themes.DARK);
		expect(useTheme().theme).toBe(Themes.DARK);
		expect(useTheme().theme).toBe(Themes.DARK);
		useTheme().toggleTheme();
		expect(useTheme().theme).toBe(Themes.LIGHT);
		expect(useTheme().theme).toBe(Themes.LIGHT);
		useTheme().toggleTheme();
		expect(useTheme().theme).toBe(Themes.DARK);
		expect(useTheme().theme).toBe(Themes.DARK);
		useTheme().toggleTheme();
		useTheme().toggleTheme();
		useTheme().toggleTheme();
		expect(useTheme().theme).toBe(Themes.LIGHT);
	});
});

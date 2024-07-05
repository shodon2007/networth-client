import {waitFor} from "@testing-library/dom";
import {RootState} from "src/app/providers/storeProvider";
import {routePath} from "src/shared/config/routeConfig";
import {Themes} from "src/shared/lib/theme";
import {renderWithProviders} from "src/shared/tests";

const mockAuthStore: RootState = {
	theme: {
		theme: Themes.DARK,
	},
	user: {
		isUserDataLoading: false,
		accessToken: "меега пачка чипсонов",
		refreshToken: "со вкусом краба",
		data: {
			email: "mockEmail2007@youtube.com",
			id: 1,
			isActivated: 0,
			name: "shodon",
			phoneNumber: "321313",
			surname: "shodon",
			avatar: "https://avatars.githubusercontent.com/u/133156395?v=4",
		},
		isAuth: true,
	},
};

describe("Testing ActivationPage.tsx", () => {
	it("should match the snapshot", async () => {
		const screen = renderWithProviders(routePath.activation, mockAuthStore);

		expect(await screen.findByTestId("activation-page")).toBeInTheDocument();
		expect(await screen.findByTestId("activation-page")).toMatchSnapshot();
	});
	it("should match the mock email", async () => {
		const screen = renderWithProviders(routePath.activation, mockAuthStore);

		expect(await screen.findByTestId("activation-page")).toBeInTheDocument();
		expect(screen.getByTestId("activation-email")).toContainHTML(
			"mockEmail2007@youtube.com",
		);
	});
	it("should match the mock email", async () => {
		const screen = renderWithProviders(routePath.activation, mockAuthStore);

		expect(await screen.findByTestId("activation-page")).toBeInTheDocument();
		expect(screen.getByTestId("activation-email")).toContainHTML(
			"mockEmail2007@youtube.com",
		);
	});
	it("should navigate to not found page when user is not auth", async () => {
		const newMockStore = JSON.parse(JSON.stringify(mockAuthStore));
		newMockStore.user.isAuth = false;
		console.log("mockStore", newMockStore);

		const screen = renderWithProviders(routePath.activation, newMockStore);

		await waitFor(() =>
			expect(screen.queryByTestId("activation-page")).not.toBeInTheDocument(),
		);
		await waitFor(() =>
			expect(screen.getByTestId("notFound-page")).toBeInTheDocument(),
		);
	});
	it("should navigate to home page when user is not auth", async () => {
		const newMockStore = JSON.parse(JSON.stringify(mockAuthStore));
		newMockStore.user.data.isActivated = 1;
		const screen = renderWithProviders(routePath.activation, newMockStore);

		await waitFor(() =>
			expect(screen.queryByTestId("activation-page")).not.toBeInTheDocument(),
		);
		await waitFor(() =>
			expect(screen.getByTestId("home-page")).toBeInTheDocument(),
		);
	});
});

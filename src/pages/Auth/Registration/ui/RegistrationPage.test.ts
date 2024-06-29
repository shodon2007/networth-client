import userEvent from "@testing-library/user-event";
import {routePath} from "src/shared/config/routeConfig";
import {renderTestApp} from "src/shared/tests";

describe("Testing RegistrationPage.tsx", () => {
	it("should match the snapshot", async () => {
		const {getByTestId, findByTestId} = renderTestApp(routePath.registration);

		expect(await findByTestId("registration-form")).toBeInTheDocument();
		expect(getByTestId("registration-form")).toBeInTheDocument();
	});

	it("should navigate to login on login link click", async () => {
		const screen = renderTestApp(routePath.registration);
		const user = userEvent.setup();
		const loginLink = await screen.findByTestId("login-link");

		await user.click(loginLink);
		expect(screen.getByTestId("login-form")).toBeInTheDocument();
		expect(screen.queryByTestId("registration-form")).not.toBeInTheDocument();
	});
});

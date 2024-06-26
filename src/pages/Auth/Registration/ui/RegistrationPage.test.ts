import {waitFor} from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import {deleteUser} from "src/entities/user/api/userApi";
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

	it("should register a new user", async () => {
		const screen = renderTestApp(routePath.registration);
		const user = userEvent.setup();
		const registerButton = await screen.findByTestId("register-button");
		const nameInput = screen.getByTestId("reigstration-name-input");
		const surnameInput = screen.getByTestId("reigstration-surname-input");
		const passwordInput = screen.getByTestId("reigstration-password-input");
		const emailInput = screen.getByTestId("reigstration-email-input");

		await user.type(nameInput, "Shodon");
		await user.type(surnameInput, "Asrorov");
		await user.type(passwordInput, "shodon2007");
		await user.type(emailInput, "work@shodon.ru");
		await user.click(registerButton);

		await waitFor(
			() => expect(screen.getByTestId("activation-page")).toBeInTheDocument(),
			{
				timeout: 2000,
			},
		);
		await deleteUser();
	});
});

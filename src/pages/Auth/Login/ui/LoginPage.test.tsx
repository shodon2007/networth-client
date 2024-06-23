import userEvent, {UserEvent} from "@testing-library/user-event";
import {renderTestApp} from "src/shared/tests";

describe("teting LoginPage.tsx", () => {
	let user: UserEvent;
	beforeAll(() => {
		user = userEvent.setup();
	});
	test("snapshot testing", async () => {
		const screen = renderTestApp("/login");
		expect(await screen.findByTestId("login-form")).toBeInTheDocument();
		expect(screen.getByTestId("login-form")).toMatchSnapshot();
	});
	test("Testing registration link", async () => {
		const screen = renderTestApp("/login");
		const registrationLink = await screen.findByTestId("registration-link");
		expect(await screen.findByTestId("login-form")).toBeInTheDocument();
		expect(screen.queryByTestId("registration-form")).not.toBeInTheDocument();
		await user.click(registrationLink);
		expect(await screen.findByTestId("registration-form")).toBeInTheDocument();
		expect(screen.queryByTestId("login-form")).not.toBeInTheDocument();
	});

	test("Testing login", async () => {
		const screen = renderTestApp("/login");
		const loginBtn = await screen.findByTestId("login-button");
		const loginEmailInput = await screen.findByTestId("email");
		const loginPasswordInput = screen.getByTestId("password");
		screen.debug();
		await user.type(loginEmailInput, "about@shodon.ru");
		await user.type(loginPasswordInput, "shodon2007");

		await user.click(loginBtn);
		screen.debug();
	});
});

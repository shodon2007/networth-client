import userEvent, {UserEvent} from "@testing-library/user-event";
import {routePath} from "src/shared/config/routeConfig";
import {renderTestApp} from "src/shared/tests";

const LOGIN = process.env.TEST_USER_EMAIL;
const PASSWORD = process.env.TEST_USER_PASSWORD;

describe("Testing LoginPage.tsx", () => {
	let user: UserEvent;
	beforeAll(() => {
		user = userEvent.setup();
	});
	test("snapshot testing", async () => {
		const screen = renderTestApp(routePath.login);
		expect(await screen.findByTestId("login-page")).toBeInTheDocument();
		expect(screen.getByTestId("login-page")).toMatchSnapshot();
	});
	test("Testing registration link", async () => {
		const screen = renderTestApp(routePath.login);
		const registrationLink = await screen.findByTestId("registration-link");
		expect(await screen.findByTestId("login-page")).toBeInTheDocument();
		expect(screen.queryByTestId("registration-form")).not.toBeInTheDocument();
		await user.click(registrationLink);
		expect(await screen.findByTestId("registration-form")).toBeInTheDocument();
		expect(screen.queryByTestId("login-page")).not.toBeInTheDocument();
	});
	test("Testing login", async () => {
		const screen = renderTestApp(routePath.login);
		const loginBtn = await screen.findByTestId("login-button");
		const loginEmailInput = await screen.findByTestId("email");
		const loginPasswordInput = screen.getByTestId("password");
		await user.type(loginEmailInput, LOGIN);
		await user.type(loginPasswordInput, PASSWORD);

		await user.click(loginBtn);
		expect(await screen.findByTestId("home-page")).toBeInTheDocument();
		expect(screen.queryByTestId("login-page")).not.toBeInTheDocument();
	});
});

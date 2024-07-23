import userEvent from "@testing-library/user-event";
import {AxiosResponse} from "axios";
import {AuthResponse} from "src/entities/auth/model/authTypes";
import {routePath} from "src/shared/config/routeConfig";
import {renderTestApp} from "src/shared/tests";
import {ResponseType} from "src/shared/types/response/responseType";
const mockRegistration: Partial<AxiosResponse<ResponseType<AuthResponse>>> = {
	data: {
		message: "Вы успешно зарегестрировались",
		status: 200,
		data: {
			isAuth: true,
			accessToken:
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZGxsZUBnbWFpbC5jb20iLCJuYW1lIjoiZnNkZnNkIiwic3VybmFtZSI6InNkZnNkZiIsImlkIjoxMjUsImlzQWN0aXZhdGVkIjowLCJhdmF0YXIiOiJodHRwczovL25ldHdvcnRoLnNob2Rvbi5ydS9hcGkvZmlsZS9hdmF0YXIvZGVmYXVsdC5wbmciLCJjb2RlIjpudWxsLCJpYXQiOjE3MjEyNjg0MzAsImV4cCI6MTcyMTI3MjAzMH0.DItI_9eiiAjd8VxY2UQi9ZsatGRjlsiTKqOGkPbL0gs",
			refreshToken:
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZGxsZUBnbWFpbC5jb20iLCJuYW1lIjoiZnNkZnNkIiwic3VybmFtZSI6InNkZnNkZiIsImlkIjoxMjUsImlzQWN0aXZhdGVkIjowLCJhdmF0YXIiOiJodHRwczovL25ldHdvcnRoLnNob2Rvbi5ydS9hcGkvZmlsZS9hdmF0YXIvZGVmYXVsdC5wbmciLCJjb2RlIjpudWxsLCJpYXQiOjE3MjEyNjg0MzAsImV4cCI6MTcyMzg2MDQzMH0.Y-cnObSeGihAozHp08cmq_K9qrXto9JWsnOPVB-FD98",
			user: {
				email: "midlle@gmail.com",
				name: "fsdfsd",
				surname: "sdfsdf",
				id: 125,
				isActivated: 0,
				avatar: `${process.env.API_URL}/api/file/avatar/default.png`,
			},
		},
	},
};
jest.mock("src/entities/auth/api/authApi", () => {
	return {
		getRegistration: jest.fn(() => {
			return mockRegistration;
		}),
	};
});

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
		expect(screen.getByTestId("login-page")).toBeInTheDocument();
		expect(screen.queryByTestId("registration-form")).not.toBeInTheDocument();
	});
	it("should registration when click registration button", async () => {
		const {findByTestId, getByTestId, debug} = renderTestApp(
			routePath.registration,
		);
		const user = userEvent.setup();
		const nameInput = await findByTestId("registration-name-input");
		const surnameInput = await findByTestId("registration-surname-input");
		const emailInput = await findByTestId("registration-email-input");
		const passwordInput = await findByTestId("registration-password-input");
		const registrationButton = await findByTestId("registration-button");
		await Promise.all([
			user.type(nameInput, "zxc"),
			user.type(surnameInput, "abc"),
			user.type(emailInput, "bro@gmail.com"),
			user.type(passwordInput, "12345678"),
		]);

		await user.click(registrationButton);
		expect(await findByTestId("activation-page")).toBeInTheDocument();
	});
});

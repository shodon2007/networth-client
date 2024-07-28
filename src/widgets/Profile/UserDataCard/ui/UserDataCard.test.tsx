import {waitFor} from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import {renderTestApp} from "src/shared/tests";
import {routePath} from "src/shared/config/routeConfig";

const initialStore = {
	user: {
		isAuth: true,
		accessToken: "hahahah",
		refreshToken: "hehehehe",
		data: {
			email: "shodon",
			id: 1,
			isActivated: 1,
			name: "shodon",
			phoneNumber: "fdsfdf",
			surname: "asrorov",
		},
		isUserDataLoading: false,
	},
};

describe("testing UserDataCard", () => {
	it("should match the snapshot", async () => {
		const screen = renderTestApp(routePath.profile, initialStore);
		expect(await screen.findByTestId("user-data-card")).toBeInTheDocument();
		expect(screen.getByTestId("user-data-card")).toMatchSnapshot();
	});
	it("should show user-data correct", async () => {
		const screen = renderTestApp(routePath.profile, initialStore);
		expect(await screen.findByTestId("profile-fullname")).toContainHTML(
			`${initialStore.user.data.name} ${initialStore.user.data.surname}`,
		);
		expect(await screen.findByTestId("profile-email")).toContainHTML(
			initialStore.user.data.email,
		);
	});
	it("should be edit profile modal works", async () => {
		const screen = renderTestApp(routePath.profile, initialStore);
		let editProfileButton: HTMLElement;
		await waitFor(
			() => (editProfileButton = screen.getByTestId("editProfileButton")),
		);
		expect(editProfileButton).toBeInTheDocument();
		expect(screen.queryByTestId("editUserModal")).not.toBeInTheDocument();
		const user = userEvent.setup();
		await user.click(editProfileButton);
		expect(screen.getByTestId("editUserModal")).toBeInTheDocument();
		const cancelButton = screen.getByTestId("profile-cancel-button");
		await user.click(cancelButton);
		expect(screen.queryByTestId("editUserModal")).not.toBeInTheDocument();
	});

	it("should be edit changePassword modal works", async () => {
		const screen = renderTestApp(routePath.profile, initialStore);
		let changePasswordButton: HTMLElement;
		await waitFor(
			() => (changePasswordButton = screen.getByTestId("changePasswordButton")),
		);
		expect(changePasswordButton).toBeInTheDocument();
		expect(screen.queryByTestId("changePasswordModal")).not.toBeInTheDocument();
		const user = userEvent.setup();
		await user.click(changePasswordButton);
		expect(screen.getByTestId("changePasswordModal")).toBeInTheDocument();
		const cancelButton = screen.getByTestId("profile-cancel-button");
		await user.click(cancelButton);
		expect(screen.queryByTestId("changePasswordModal")).not.toBeInTheDocument();
	});

	it("should be edit changeEmail modal works", async () => {
		const screen = renderTestApp(routePath.profile, initialStore);
		let changePasswordButton: HTMLElement;
		await waitFor(
			() => (changePasswordButton = screen.getByTestId("changeEmailButton")),
		);
		expect(changePasswordButton).toBeInTheDocument();
		expect(screen.queryByTestId("changeEmailModal")).not.toBeInTheDocument();
		const user = userEvent.setup();
		await user.click(changePasswordButton);
		expect(screen.getByTestId("changeEmailModal")).toBeInTheDocument();
		const cancelButton = screen.getByTestId("profile-cancel-button");
		await user.click(cancelButton);
		expect(screen.queryByTestId("changeEmailModal")).not.toBeInTheDocument();
	});
});

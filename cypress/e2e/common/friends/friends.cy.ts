// import {
// 	getEditUserModal,
// 	getEditUserModalBtn,
// 	getEditUserNameInput,
// 	getEditUserSubmitBtn,
// 	getEditUserSurnameInput,
// 	getProfileFullnameText,

import {selectByTestId} from "../../../helpers/selectByTestId";

// } from "./commands";
describe("Test friends page", () => {
	describe("Testing with user 1", () => {
		beforeEach(() => {
			const login = Cypress.env("TEST_USER_EMAIL");
			const password = Cypress.env("TEST_USER_PASSWORD");
			cy.login(login, password);
		});
		it("should work friends Navbar", () => {
			cy.intercept(`${Cypress.env("API_URL")}/api/translation/ru`).as(
				"translation",
			);
			cy.intercept(`${Cypress.env("API_URL")}/api/user/user_info`).as(
				"user_info",
			);
			cy.visit("/friends");
			cy.wait("@user_info");
			cy.wait("@translation");
			cy.get(selectByTestId("friends-page")).should("exist");
			cy.get(selectByTestId("friends-myfriends-page")).should("exist");
			cy.get(selectByTestId("friends-navbar-button-searchUsers")).click();
			cy.get(selectByTestId("friends-searchUsers-page")).should("exist");
			cy.get(selectByTestId("friends-navbar-button-requests")).click();
			cy.get(selectByTestId("friends-requests-page")).should("exist");
			cy.get(selectByTestId("friends-navbar-button-")).click();
			cy.get(selectByTestId("friends-myfriends-page")).should("exist");
		});

		it("should find user and send friend request", () => {
			cy.visit("/friends");
			cy.get(selectByTestId("friends-navbar-button-searchUsers")).click();
			cy.get(selectByTestId("search-users-input")).type(
				Cypress.env("TEST_USER_EMAIL2"),
			);
			cy.get(selectByTestId("search-users-button")).click();
			cy.get(selectByTestId("search-users-item-127"))
				.get(selectByTestId("search-users-sendRequest-button"))
				.click();
		});

		it("should have sended request in friendsRequest tab", () => {
			cy.visit("/friends");
			cy.get(selectByTestId("friends-navbar-button-requests")).click();
			cy.get(selectByTestId("friend-requests-sends-tab")).click();
			cy.get(selectByTestId("friends-requests-sended-item-127")).should(
				"exist",
			);
		});
	});

	describe("Testing with user 2", () => {
		beforeEach(() => {
			const login = Cypress.env("TEST_USER_EMAIL2");
			const password = Cypress.env("TEST_USER_PASSWORD2");
			cy.login(login, password);
		});
		it("should have request in friendsRequest tab from user 1", () => {
			cy.visit("/friends");
			cy.get(selectByTestId("friends-navbar-button-requests")).click();
			cy.get(selectByTestId("friends-requests-received-item-120")).should(
				"exist",
			);
		});

		it("should add to friends user 1", () => {
			cy.visit("/friends");
			cy.get(selectByTestId("friends-navbar-button-requests")).click();
			cy.get(selectByTestId("friends-requests-received-item-120"))
				.get(selectByTestId("friends-requests-received-accept-button"))
				.click();
		});
		it("should delete user 1 from friends", () => {
			cy.visit("/friends");
			cy.get(selectByTestId("friends-navbar-button-")).click();
			cy.get(selectByTestId("friends-myfriends-item-120"))
				.get(selectByTestId("friends-myfriends-dropdown"))
				.click();
			cy.get(selectByTestId("friends-myfriends-item-120"))
				.get(selectByTestId("friends-myfriends-deleteFriend-button"))
				.click();
		});
	});
});

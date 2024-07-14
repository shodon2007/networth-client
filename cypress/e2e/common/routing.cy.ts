import {selectByTestId} from "../../helpers/selectByTestId";
describe("Test routes", () => {
	describe("Testing routes with auth", () => {
		beforeEach(() => {
			const login = Cypress.env("TEST_USER_EMAIL");
			const password = Cypress.env("TEST_USER_PASSWORD");
			cy.login(login, password);
		});
		it("Check home page route", () => {
			cy.visit("/");
			cy.get(selectByTestId("home-page")).should("exist");
		});
		it("Check profile page route", () => {
			cy.visit("/profile");
			cy.get(selectByTestId("profile-page")).should("exist");
		});
		it("Check messanger page route", () => {
			cy.visit("/messanger");
			cy.get(selectByTestId("messanger-page")).should("exist");
		});
		it("Check login page route", () => {
			cy.visit("/login");
			cy.get(selectByTestId("notFound-page")).should("exist");
		});
	});
	describe("Testing routes with no auth", () => {
		it("Check home page route", () => {
			cy.visit("/");
			cy.get(selectByTestId("home-page")).should("exist");
		});
		it("Check profile page route", () => {
			cy.visit("/profile");
			cy.get(selectByTestId("notFound-page")).should("exist");
		});
		it("Check messanger page route", () => {
			cy.visit("/messanger");
			cy.get(selectByTestId("notFound-page")).should("exist");
		});
		it("Check login page route", () => {
			cy.visit("/login");
			cy.get(selectByTestId("login-page")).should("exist");
		});
	});
});

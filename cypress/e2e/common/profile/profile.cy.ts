import {
	getEditUserModal,
	getEditUserModalBtn,
	getEditUserNameInput,
	getEditUserSubmitBtn,
	getEditUserSurnameInput,
	getProfileFullnameText,
} from "./commands";
describe("Test profile page", () => {
	beforeEach(() => {
		const login = Cypress.env("TEST_USER_EMAIL");
		const password = Cypress.env("TEST_USER_PASSWORD");
		cy.login(login, password);
	});
	it("Check edit user is working", async () => {
		cy.visit("/profile");
		let newName = "abc12";
		let newSurname = "shodon2007";

		getEditUserModalBtn().click();
		getEditUserModal().should("exist");
		getEditUserNameInput().clear().type(newName);
		getEditUserSurnameInput().clear().type(newSurname);
		getEditUserSubmitBtn().click();
		getEditUserModal().should("not.exist");
		getProfileFullnameText().should("have.text", `${newName} ${newSurname}`);

		newName = "goodbro";
		newSurname = "asdf";
		getEditUserModalBtn().click();
		getEditUserModal().should("exist");
		getEditUserNameInput().clear().type(newName);
		getEditUserSurnameInput().clear().type(newSurname);
		getEditUserSubmitBtn().click();
		getEditUserModal().should("not.exist");
		getProfileFullnameText().should("have.text", `${newName} ${newSurname}`);
	});
});

import {selectByTestId} from "../../../helpers/selectByTestId";

export const getEditUserModalBtn = () =>
	cy.get(selectByTestId("editProfileButton"));
export const getEditUserModal = () => cy.get(selectByTestId("editUserModal"));
export const getEditUserNameInput = () =>
	cy.get(selectByTestId("editNameInput"));
export const getEditUserSurnameInput = () =>
	cy.get(selectByTestId("editSurnameInput"));
export const getEditUserSubmitBtn = () =>
	cy.get(selectByTestId("profile-submit-button"));
export const getProfileFullnameText = () =>
	cy.get(selectByTestId("profile-fullname"));

export const login = (email: string, password: string) => {
	cy.intercept("POST", "**/api/user/login").as("login");
	cy.visit("/login");
	cy.get(selectByTestId("email")).type(email);
	cy.get(selectByTestId("password")).type(password);
	cy.get(selectByTestId("login-button")).click();
	cy.wait("@login");
};

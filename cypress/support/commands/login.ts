import {selectByTestId} from "../../helpers/selectByTestId";

export const login = (email: string, password: string) => {
	cy.intercept("POST", "**/api/user/login").as("login");
	cy.visit("/login");
	cy.get(selectByTestId("email")).type(email);
	cy.get(selectByTestId("password")).type(password);
	cy.get(selectByTestId("login-button")).click();
	cy.wait("@login");
};

/// <reference types="cypress" />

import {login} from "./commands/login";

Cypress.Commands.add("login", login);
declare global {
	namespace Cypress {
		interface Chainable {
			login(
				email: string,
				password: string,
			): Chainable<Cypress.Response<unknown>>;
			drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>;
			dismiss(
				subject: string,
				options?: Partial<TypeOptions>,
			): Chainable<Element>;
			visit(
				originalFn: CommandOriginalFn<"visit">,
				url: string,
				options: Partial<VisitOptions>,
			): Chainable<Element>;
		}
	}
}

export {};

import { UserTypes } from "../user/userTypes";

// TODO: Decide which type of data apply for id and phoneNumber.
export interface RegistrationRequest {
	name: string;
	surname: string;
	email: string;
	password: string;
	phoneNumber: number | string;
	avatar?: string;
}

export interface RegistrationResponse {
	isAuth: boolean;
	accessToken: string | null;
	refreshToken: string | null;
	user?: UserTypes;
}

export interface RegistrationError {
	error: number;
	message: string;
}

import {UserType} from "./UserType";

export interface AuthResponse {
	isAuth: boolean;
	accessToken: string | null;
	refreshToken: string | null;
	user?: UserType;
}

export interface AuthRequest {
	email: string;
	name: string;
	surname: string;
	password: string;
}

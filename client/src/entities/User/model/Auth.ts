import {UserType} from "./userType";

export interface AuthResponse {
	// Я этот name по рофлу поставил, name будет внутри user.
	isAuth: boolean;
	accessToken: string | null;
	refreshToken: string | null;
	user?: UserType;
}

export interface AuthRequest {
	email: string;
	password: string;
}

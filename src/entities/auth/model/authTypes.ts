import {UserTypes} from "src/shared/types/user/userTypes";

export interface AuthResponse {
	isAuth: boolean;
	accessToken: string | null;
	refreshToken: string | null;
	user?: UserTypes;
}

export interface AuthRequest {
	email: string;
	name: string;
	surname: string;
	password: string;
}

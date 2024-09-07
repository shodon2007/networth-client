import {UserInfoTypes} from "src/shared/types/user/userInfoTypes";

export interface AuthResponse {
	isAuth: boolean;
	accessToken?: string;
	refreshToken?: string;
	user?: UserInfoTypes;
}

export interface AuthRequest {
	email: string;
	name: string;
	surname: string;
	password: string;
}

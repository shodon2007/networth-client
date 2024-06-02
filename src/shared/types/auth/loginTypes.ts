import {UserTypes} from "../user/userTypes";

export interface LoginRequest {
	phoneNumber?: string;
	email: string;
	password: string;
}

export interface LoginResponse 
{
	isAuth: boolean;
	accessToken: string | null;
	refreshToken: string | null;
	user?: UserTypes;
}

export interface LoginError {
	error: number;
	message: string;
}
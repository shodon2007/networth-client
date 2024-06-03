import {AxiosResponse} from "axios";
import {instance} from "src/shared/api/instance/instance";
import {ResponseType} from "src/shared/types/response/responseType";
import {AuthResponse} from "../model/authTypes";

export interface LoginRequestType {
	email: string;
	password: string;
}

export interface RegistrationRequestType {
	name: string;
	surname: string;
	email: string;
	password: string;
}

type loginFnType = (
	req: LoginRequestType,
) => Promise<AxiosResponse<ResponseType<AuthResponse>>>;

type registrationFnType = (
	req: RegistrationRequestType,
) => Promise<AxiosResponse<ResponseType<AuthResponse>>>;

export const getLogin: loginFnType = async (data) => {
	return await instance.post<ResponseType<AuthResponse>>(
		"/api/user/login",
		data,
	);
};

export const getRegistration: registrationFnType = async (data) => {
	return await instance.post<ResponseType<AuthResponse>>(
		"/api/user/registration",
		data,
	);
};

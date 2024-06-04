import {AxiosResponse} from "axios";
import {ResponseType} from "src/shared/types/response/responseType";
import {authInstance} from "src/shared/api/auth-instance/auth-instance";
import {UserInfoTypes} from "src/shared/types/user/userInfoTypes";
import {
	ChangeEmailTypes,
	ChangePasswordTypes,
	SendCodeTypes,
} from "../model/profileTypes";

interface AvatarData {
	avatar: string;
}

export const getUserInfo = async () => {
	return await authInstance.get("/api/user_info");
};

export const updateUserInfo = async (data: Partial<UserInfoTypes>) => {
	return await authInstance.post("/api/user/edit_profile", data);
};

export const updatePassword = async (data: ChangePasswordTypes) => {
	return await authInstance.post("/api/user/change_password", data);
};

export const updateEmail = async (data: ChangeEmailTypes) => {
	return await authInstance.post("/api/user/change_email", data);
};

export const updateAvatar = async (data: FormData) => {
	return await authInstance.post<ResponseType<AvatarData>>(
		"/api/file/change_avatar",
		data,
	);
};

export const sendCode = async (data: SendCodeTypes) => {
	return await authInstance.post("/api/user/send_code", data);
};

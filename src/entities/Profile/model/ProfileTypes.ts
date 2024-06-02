export interface ChangePasswordTypes {
	oldPassword: string;
	newPassword: string;
}

export interface SendCodeTypes {
	email: string;
}
export interface ChangeEmailTypes {
	email: string;
	code: string;
}

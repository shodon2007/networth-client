export interface UserInfoTypes {
	id: number | string;
	name: string;
	surname: string;
	email: string;
	password: string;
	phoneNumber: number | string;
	avatar?: string;
	isActivated: number;
}

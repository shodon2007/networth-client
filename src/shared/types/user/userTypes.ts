// import {UserRegType} from "src/shared/types/auth/registrationTypes";

export interface UserTypes {
	id: number | string;
	name: string;
	surname: string;
	email: string;
	password: string;
	phoneNumber: number | string;
	avatar?: string;
	isActivated: number;
}

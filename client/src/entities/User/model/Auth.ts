import {UserType} from "./userType";

export interface AuthResponse {
<<<<<<< HEAD
=======
	// Я этот name по рофлу поставил, name будет внутри user. Which @name ?
>>>>>>> 29a9f31aa60bc7666e5c63b6708740f05ec3009d
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

import {UserInfoTypes} from "src/shared/types/user/userInfoTypes";

export interface ProfileTypes extends UserInfoTypes {
	// TODO: create friends list type and gives it like the type
	friendsList: string[];

	musicList: string[];
	videoList: string[];

	// TODO: Create type for albums and gives it like the type
	musicAlbums: string[];
	videoAlbums: string[];

	// TODO: create settings type and gives it like the type
	settingsList: string[];
}

export interface ChangePasswordTypes {
	oldPassword: string;
	newPassword: string;
}

export interface ChangeEmailTypes {
	email: string;
	code: string;
}

export interface SendCodeTypes {
	email: string;
}

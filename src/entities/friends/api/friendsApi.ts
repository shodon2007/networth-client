import {authInstance} from "src/shared/api/auth-instance/auth-instance";

export const getSearchUsers = async (searchText: string) => {
	const userInfo = await authInstance.get(
		`/api/friends/search_user/${searchText}`,
	);
	return userInfo;
};

import {authInstance} from "src/shared/api/auth-instance/auth-instance";

export const getSearchUsers = async (searchText: string) => {
	console.log("axios search: ", searchText);
	const userInfo = await authInstance.get(
		`/api/friends/search_user/${searchText}`,
	);
	return userInfo;
};

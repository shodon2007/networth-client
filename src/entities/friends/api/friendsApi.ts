import {AxiosResponse} from "axios";
import {authInstance} from "src/shared/api/auth-instance/auth-instance";
import {ResponseType} from "src/shared/types/response/responseType";
import {UserInfoTypes} from "src/shared/types/user/userInfoTypes";

export const getSearchUsers = async (
	searchText: string = " ",
	param: number,
) => {
	const resp = await authInstance.get(
		`/api/friends/search_user/${searchText}`,
		{
			params: {
				page: param,
			},
		},
	);
	return resp;
};

export const getFriends = async (searchText: string = "") => {
	const resp = await authInstance.get(`/api/friends/all`, {
		params: {
			searchText: searchText,
		},
	});
	return resp.data;
};

export const sendFriendRequest = async (sendId: number) => {
	const resp = await authInstance.post(`/api/friends/send_request`, {
		sendId,
	});
	return resp.data;
};

export const rejectFriendRequest = async (sendId: number) => {
	const resp = await authInstance.post(`/api/friends/reject_request`, {
		sendId,
	});
	return resp.data;
};

export const getSendFriendRequestList = async () => {
	const resp: AxiosResponse<ResponseType<UserInfoTypes[]>> =
		await authInstance.get(`/api/friends/send_request/all`);
	return resp.data;
};

export const getGetFriendRequestList = async () => {
	const resp: AxiosResponse<ResponseType<UserInfoTypes[]>> =
		await authInstance.get(`/api/friends/get_request/all`);
	return resp.data;
};

export const acceptFriendRequest = async (friendId: number) => {
	const resp: AxiosResponse<ResponseType<boolean>> = await authInstance.post(
		`/api/friends/accept_request/${friendId}`,
	);
	return resp.data;
};

export const deleteFriend = async (friendId: number) => {
	const resp: AxiosResponse<ResponseType<boolean>> = await authInstance.delete(
		`/api/friends`,
		{
			params: {
				friendId,
			},
		},
	);
	return resp.data;
};

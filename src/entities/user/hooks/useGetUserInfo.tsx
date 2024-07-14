import {useQuery} from "@tanstack/react-query";
import {getUserInfo} from "../api/userApi";

export const useGetUserInfo = () => {
	return useQuery({
		queryKey: [],
		queryFn: async () => {
			const resp = await getUserInfo();
			return resp.data;
		},
		retry: false,
	});
};

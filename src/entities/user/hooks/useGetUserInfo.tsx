import {useQuery} from "@tanstack/react-query";
import {getUserInfo} from "../api/userApi";

export const useGetUserInfo = (accessToken: string) => {
	const query = useQuery({
		queryKey: [accessToken],
		queryFn: async () => {
			const resp = await getUserInfo();
			return resp.data;
		},
		refetchInterval: 1000 * 60 * 5,
		retry: false,
	});

	return query;
};

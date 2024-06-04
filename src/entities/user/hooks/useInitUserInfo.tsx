import {useQuery} from "@tanstack/react-query";
import {getUserInfo} from "../api/userApi";

export const useGetUserInfo = () => {
	return useQuery({
		queryKey: [],
		queryFn: () => getUserInfo(),
	});
};

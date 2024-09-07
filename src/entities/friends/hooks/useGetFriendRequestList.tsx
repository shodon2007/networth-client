import {useQuery} from "@tanstack/react-query";
import {getGetFriendRequestList} from "../api/friendsApi";

export const useGetFriendRequestList = () => {
	const query = useQuery({
		queryKey: ["get_friend_request_list"],
		queryFn: async () => {
			const resp = await getGetFriendRequestList();
			return resp.data;
		},
	});
	return query;
};

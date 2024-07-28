import {useQuery} from "@tanstack/react-query";
import {getSendFriendRequestList} from "../api/friendsApi";

export const useSendFriendRequestList = () => {
	const query = useQuery({
		queryKey: ["send_friend_request_list"],
		queryFn: async () => {
			const resp = await getSendFriendRequestList();
			return resp.data;
		},
	});
	return query;
};

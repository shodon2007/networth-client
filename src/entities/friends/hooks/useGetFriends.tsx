import {useQuery} from "@tanstack/react-query";
import {getFriends} from "../api/friendsApi";

export const useGetFriends = (searchText: string) => {
	const query = useQuery({
		queryKey: ["get_friends", searchText],
		queryFn: async () => {
			const resp = await getFriends(searchText);
			return resp.data;
		},
		retry: false,
	});

	return query;
};

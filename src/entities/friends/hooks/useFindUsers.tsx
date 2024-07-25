import {useQuery} from "@tanstack/react-query";
import {getSearchUsers} from "../api/friendsApi";

export const useFindUsers = (searchText: string) => {
	const query = useQuery({
		queryKey: ["search_user", searchText],
		queryFn: async () => {
			const resp = await getSearchUsers(searchText);
			return resp.data;
		},
		retry: false,
	});

	return query;
};

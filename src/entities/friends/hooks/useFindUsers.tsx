import {useInfiniteQuery} from "@tanstack/react-query";
import {getSearchUsers} from "../api/friendsApi";

export const useFindUsers = (searchText: string) => {
	const query = useInfiniteQuery({
		queryKey: ["search_user", searchText],
		queryFn: async ({pageParam}) => {
			const resp = await getSearchUsers(searchText, pageParam);
			return resp.data;
		},
		initialPageParam: 0,
		getNextPageParam: (lastPage, allPages) => {
			return allPages.length;
		},
	});

	return query;
};

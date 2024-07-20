import {useQuery} from "@tanstack/react-query";
import {getSearchUsers} from "../api/friendsApi";

export const useFindUsers = (searchText: string) => {
	const query = useQuery({
		queryKey: ["search_user", searchText],
		queryFn: async () => {
			const resp = await getSearchUsers(searchText);
			let r = [];
			while (r.length < 100000) {
				r.push(...resp.data);
			}
			return r;
		},
		retry: false,
	});

	return query;
};

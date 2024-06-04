import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
	FetchBaseQueryMeta,
	createApi,
} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "src/shared/api/baseQuery";

export const userApi: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError,
	FetchBaseQueryMeta
> = createApi({
	reducerPath: "userApi",
	baseQuery: baseQuery,
	endpoints: (build) => ({
		fetchUserInfo: build.query({
			query: () => ({
				url: "user/user_info",
				method: "GET",
			}),
		}),
	}),
});

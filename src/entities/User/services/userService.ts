import {createApi} from "@reduxjs/toolkit/query/react";
import {AuthRequest, AuthResponse} from "../model/Auth";
import {baseQuery} from "src/shared/api/baseQuery";

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: baseQuery,
	endpoints: (build) => ({
		fetchLogin: build.mutation<AuthResponse, AuthRequest>({
			query: (data) => ({
				url: "user/login",
				method: "POST",
				body: data,
			}),
		}),
		fetchRegistration: build.mutation<AuthResponse, AuthRequest>({
			query: (data) => ({
				url: "user/registration",
				method: "POST",
				body: data,
			}),
		}),
		fetchUserInfo: build.query({
			query: () => ({
				url: "user/user_info",
				method: "GET",
			}),
			providesTags: (result, error, id) => [{type: "User", id}],
			refetchOnMountOrArgChange: true,
		}),
	}),
});

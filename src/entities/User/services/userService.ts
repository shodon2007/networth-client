import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {AuthRequest, AuthResponse} from "../model/Auth";
import {UserType} from "../model/UserType";

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: fetchBaseQuery({baseUrl: "https://networth.shodon.ru/api/user/"}),
	endpoints: (build) => ({
		fetchLogin: build.mutation<AuthResponse, AuthRequest>({
			query: (data) => ({
				url: "login",
				method: "POST",
				body: data,
			}),
		}),
		fetchRegistration: build.mutation<AuthResponse, AuthRequest>({
			query: (data) => ({
				url: "registration",
				method: "POST",
				body: data,
			}),
		}),
		fetchUserInfo: build.query<UserType, string>({
			query: (accessToken) => ({
				url: "user_info",
				method: "GET",
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}),
		}),
	}),
});

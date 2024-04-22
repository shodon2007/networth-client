import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {AuthRequest, AuthResponse} from "../model/Auth";

interface AuthError {
	message: string;
}

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: fetchBaseQuery({baseUrl: "https://networth.shodon.ru/api/auth/"}),
	endpoints: (build) => ({
		fetchLogin: build.mutation<AuthResponse, AuthRequest>({
			query: (data) => ({
				url: "login",
				method: "POST",
				body: data,
			}),
		}),
	}),
});

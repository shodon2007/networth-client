import {fetchBaseQuery} from "@reduxjs/toolkit/query";
import {RootState} from "src/app/providers/storeProvider";
export const baseUrl = "https://networth.shodon.ru/api/";

export const baseQuery = fetchBaseQuery({
	baseUrl,
	prepareHeaders: (headers, {getState}) => {
		const token = (getState() as RootState).user.accessToken;

		// If we have a token set in state, let's assume that we should be passing it.
		if (token) {
			headers.set("authorization", `Bearer ${token}`);
		}

		return headers;
	},
});

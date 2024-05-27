import {createApi} from "@reduxjs/toolkit/query/react";
import {UserType} from "src/entities/User";
import {baseQuery} from "src/shared/api/baseQuery";
import {ResponseType} from "src/shared/types/response/responseType";

export const profileApi = createApi({
	reducerPath: "profileApi",
	baseQuery: baseQuery,
	endpoints: (build) => ({
		fetchChangeUser: build.mutation<ResponseType, UserType>({
			query: (data) => ({
				url: "user/edit_profile",
				method: "POST",
				body: data,
			}),
		}),
		fetchUploadAvatar: build.mutation<ResponseType, FormData>({
			query: (data) => ({
				url: "file/avatar",
				method: "POST",
				body: data,
			}),
		}),
	}),
});

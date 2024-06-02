import {createApi} from "@reduxjs/toolkit/query/react";
import {UserType} from "src/entities/User";
import {baseQuery} from "src/shared/api/baseQuery";
import {ResponseType} from "src/shared/types/response/responseType";

import {
	ChangeEmailTypes,
	ChangePasswordTypes,
	SendCodeTypes,
} from "../model/ProfileTypes";

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
		fetchChangePassword: build.mutation<ResponseType, ChangePasswordTypes>({
			query: (data) => ({
				url: "user/change_password",
				method: "POST",
				body: data,
			}),
		}),
		fetchChangeEmail: build.mutation<ResponseType, ChangeEmailTypes>({
			query: (data) => ({
				url: "user/change_email",
				method: "POST",
				body: data,
			}),
		}),
		fetchSendCode: build.mutation<ResponseType, SendCodeTypes>({
			query: (data) => ({
				url: "user/send_code",
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

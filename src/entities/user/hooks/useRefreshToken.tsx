import {useMutation} from "@tanstack/react-query";
import {refreshToken} from "../api/userApi";
import {AxiosError} from "axios";
import {ErrorResponseType} from "src/shared/types/response/responseType";
import {useUser} from "./useUser";
import {updateAccessToken} from "../services/userSlice";
import {useAppDispatch} from "src/shared/lib/store";
import {memo} from "react";

export const useRefreshToken = () => {
	const user = useUser();
	const dispatch = useAppDispatch();
	return useMutation({
		mutationFn: (error: Error) => {
			if (error instanceof AxiosError) {
				if (error.response.status === 401 && user.accessToken) {
					return refreshToken();
				}
			}
		},
		onSuccess: (resp) => {
			if (resp?.data?.accessToken) {
				dispatch(updateAccessToken(resp.data.accessToken));
			}
		},
		onError: (resp: AxiosError<ErrorResponseType>) => {
			console.log("error", resp);
		},
	});
};

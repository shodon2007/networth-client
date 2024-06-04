import {useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {toast} from "react-toastify";
import {ErrorResponseType} from "src/shared/types/response/responseType";
import {updatePassword} from "../api/userApi";
import {ChangePasswordTypes} from "../model/profileTypes";

export const useChangePassword = (onSuccess: () => void) => {
	return useMutation({
		mutationFn: (data: ChangePasswordTypes) => {
			return updatePassword(data);
		},
		onSuccess: (resp) => {
			onSuccess();
			toast.success(resp.data.message);
		},
		onError: (resp: AxiosError<ErrorResponseType>) => {
			toast.error(resp.response?.data.message);
		},
	});
};

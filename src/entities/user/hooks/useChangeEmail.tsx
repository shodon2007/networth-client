import {useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {toast} from "react-toastify";
import {ErrorResponseType} from "src/shared/types/response/responseType";
import {useAppDispatch} from "src/shared/lib/store";
import {sendCode, updateEmail} from "../api/userApi";
import {ChangeEmailTypes, SendCodeTypes} from "../model/profileTypes";
import {setUserInfo} from "../services/userSlice";
import {useGetUser} from "./useGetUser";

export const useSendCode = (onSuccess?: () => void) => {
	return useMutation({
		mutationFn: (data: SendCodeTypes) => {
			return sendCode(data);
		},
		onSuccess: (resp) => {
			onSuccess?.();
			toast.success(resp.data.message);
		},
		onError: (resp: AxiosError<ErrorResponseType>) => {
			toast.error(resp.response?.data.message);
		},
	});
};

export const useChangeEmail = (onSuccess: () => void) => {
	const dispatch = useAppDispatch();
	const {data: userData} = useGetUser();

	return useMutation({
		mutationFn: (data: ChangeEmailTypes) => {
			return updateEmail(data);
		},
		onSuccess: (resp, data) => {
			onSuccess();
			if (userData) {
				dispatch(
					setUserInfo({
						...userData,
						email: data.email,
					}),
				);
			}
			toast.success(resp.data.message);
		},
		onError: (resp: AxiosError<ErrorResponseType>) => {
			toast.error(resp.response?.data.message);
		},
	});
};

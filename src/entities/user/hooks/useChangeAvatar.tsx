import {useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {toast} from "react-toastify";
import {ErrorResponseType} from "src/shared/types/response/responseType";
import {useAppDispatch} from "src/shared/lib/store";
import {updateAvatar} from "../api/userApi";
import {setUserInfo} from "../services/userSlice";
import {useGetUser} from "./useGetUser";

export const useChangeAvatar = (onSuccess: () => void) => {
	const {data: userData} = useGetUser();
	const dispatch = useAppDispatch();
	return useMutation({
		mutationFn: (data: FormData) => {
			return updateAvatar(data);
		},
		onSuccess: (resp) => {
			if (userData) {
				dispatch(
					setUserInfo({
						...userData,
						avatar: resp.data.data.avatar,
					}),
				);
			}
			toast.success(resp.data.message);
			onSuccess();
		},
		onError: (resp: AxiosError<ErrorResponseType>) => {
			toast.error(resp.response?.data.message);
		},
	});
};

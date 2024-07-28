import {useMutation} from "@tanstack/react-query";
import {rejectFriendRequest} from "../api/friendsApi";
import {toast} from "react-toastify";
import {ErrorResponseType} from "src/shared/types/response/responseType";
import {AxiosError} from "axios";

export const useRejectFriendRequest = (onSuccess?: () => void) => {
	return useMutation({
		mutationFn: (friendId: number) => {
			return rejectFriendRequest(friendId);
		},
		onSuccess: (resp) => {
			onSuccess?.();
			toast.success(resp.message);
		},
		onError: (resp: AxiosError<ErrorResponseType>) => {
			toast.error(resp.response?.data.message);
		},
	});
};

import {useMutation} from "@tanstack/react-query";
import {acceptFriendRequest} from "../api/friendsApi";
import {toast} from "react-toastify";
import {ErrorResponseType} from "src/shared/types/response/responseType";
import {AxiosError} from "axios";

export const useAcceptFriendRequest = (onSuccess?: () => void) => {
	return useMutation({
		mutationFn: (friendId: number) => {
			return acceptFriendRequest(friendId);
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

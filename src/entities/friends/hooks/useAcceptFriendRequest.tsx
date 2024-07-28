import {useMutation} from "@tanstack/react-query";
import {toast} from "react-toastify";
import {AxiosError} from "axios";
import {ErrorResponseType} from "src/shared/types/response/responseType";
import {acceptFriendRequest} from "../api/friendsApi";

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

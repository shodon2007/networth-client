import {useMutation} from "@tanstack/react-query";
import {deleteFriend} from "../api/friendsApi";
import {toast} from "react-toastify";
import {AxiosError} from "axios";
import {ErrorResponseType} from "src/shared/types/response/responseType";

const useDeleteFriend = (onSuccess?: () => void) => {
	return useMutation({
		mutationFn: (friendId: number) => {
			return deleteFriend(friendId);
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

export default useDeleteFriend;

import {useMutation} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {toast} from "react-toastify";
import {ErrorResponseType} from "src/shared/types/response/responseType";
import {UserInfoTypes} from "src/shared/types/user/userInfoTypes";
import {useAppDispatch} from "src/shared/lib/store";
import {updateUserInfo} from "../api/userApi";
import {setUserInfo} from "../services/userSlice";
import {useUser} from "./useUser";

export const useUpdateUserInfo = (onSuccess: () => void) => {
	const dispatch = useAppDispatch();
	const {data: userData} = useUser();

	return useMutation({
		mutationFn: (data: Partial<UserInfoTypes>) => {
			return updateUserInfo(data);
		},
		onSuccess: (resp, data) => {
			const updatedUserInfo = userData;
			toast.success(resp.data.message);

			if (updatedUserInfo) {
				dispatch(setUserInfo({...updatedUserInfo, ...data}));
			}
			onSuccess();
		},
		onError: (resp: AxiosError<ErrorResponseType>) => {
			toast.error(resp.response?.data.message);
		},
	});
};

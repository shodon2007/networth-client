import {useMutation} from "@tanstack/react-query";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {AxiosError} from "axios";

import {useAppDispatch} from "src/shared/lib/store";
import {setUser} from "src/entities/user/services/userSlice";
import {ErrorResponseType} from "src/shared/types/response/responseType";
import {LoginRequestType, getLogin} from "../api/authApi";

export const useLogin = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	return useMutation({
		mutationFn: ({email, password}: LoginRequestType) => {
			return getLogin({email, password});
		},
		onSuccess: (resp) => {
			dispatch(setUser(resp.data.data));
			toast.success(resp.data.message);
			navigate("/");
		},
		onError: (resp: AxiosError<ErrorResponseType>) => {
			toast.error(resp.response?.data.message);
		},
	});
};

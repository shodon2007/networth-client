import {useMutation} from "@tanstack/react-query";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {AxiosError} from "axios";

import {useAppDispatch} from "src/shared/lib/store";
import {setUser} from "src/entities/User/services/userSlice";
import {ErrorResponseType} from "src/shared/types/response/responseType";
import {RegistrationRequestType, getRegistration} from "../api/authApi";

export const useRegistration = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	return useMutation({
		mutationFn: ({email, password, name, surname}: RegistrationRequestType) => {
			return getRegistration({email, password, name, surname});
		},
		onSuccess: (resp) => {
			dispatch(setUser(resp.data.data));
			toast.success(resp.data.message);
			navigate("/activation");
		},
		onError: (resp: AxiosError<ErrorResponseType>) => {
			toast.error(resp.response?.data.message);
		},
	});
};

<<<<<<< HEAD
import {FC} from "react";
import Input from "src/shared/ui/Input/Input";
import cls from "./LoginPage.module.scss";
import Button from "src/shared/ui/Buttons/authSubmitBtn/Button";
import Block from "src/shared/ui/Block/Block";
import {Title} from "src/shared/ui/Title/Title";
import MyLink from "src/shared/ui/Link/Link";
import {setUser, userApi} from "src/entities";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {AuthRequest} from "src/entities/User/model/Auth";
import {toast} from "react-toastify";
import {useAppDispatch} from "src/shared/lib/store";
import { useNavigate } from "react-router-dom";

const LoginPage: FC = () => {
	const [loginUser] = userApi.useFetchLoginMutation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {control, handleSubmit} = useForm<AuthRequest>({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const submit: SubmitHandler<AuthRequest> = async (data) => {
		const resp = await loginUser(data);
		if ("error" in resp) {
			console.log(resp);
			//@ts-ignore
			toast.error(resp.error.data.message, {
				autoClose: 2000,
			});
		} else {
			dispatch(setUser(resp.data));
			navigate('/');
		}
	};
=======
import { FC } from "react";
import LoginWidget from "src/widgets/ui/auth/ui/LoginWidget";


const LoginPage: FC = () => {
>>>>>>> 29a9f31aa60bc7666e5c63b6708740f05ec3009d

	// It's incorrect to write any other code in page folder
	// exclude the widgets in our proejct that is wrong
	return (
		<LoginWidget />
	);
};

export default LoginPage;

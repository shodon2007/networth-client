import {FC} from "react";
import Input from "src/shared/ui/Input/Input";
import Button from "src/shared/ui/Buttons/authSubmitBtn/Button";
import Block from "src/shared/ui/Block/Block";
import {Title} from "src/shared/ui/Title/Title";
import MyLink from "src/shared/ui/Link/Link";
import {setUser, userApi} from "src/entities";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {AuthRequest} from "src/entities/User/model/Auth";
import {toast} from "react-toastify";
import {useAppDispatch} from "src/shared/lib/store";
import {RegistrationRequest} from "src/shared/types/auth/registrationTypes";

import cls from "./RegistrationPage.module.scss";

const RegistrationPage: FC = () => {
	const [registrationUser] = userApi.useFetchRegistrationMutation();
	const dispatch = useAppDispatch();
	const {control, handleSubmit} = useForm<RegistrationRequest>({
		defaultValues: {
			email: "",
			password: "",
			avatar: "",
			name: "",
			surname: "",
			phoneNumber: "",
		},
	});

	const submit: SubmitHandler<AuthRequest> = async (data) => {
		// тут
		const resp = await registrationUser(data);
		console.log(resp);
		if ("error" in resp) {
			//@ts-ignore
			toast.error(resp.error.data.message, {
				autoClose: 2000,
			});
		} else {
			dispatch(setUser(resp.data));
		}
	};

	return (
		<form onSubmit={handleSubmit(submit)}>
			<Block className={cls.page}>
				<Title>Registration</Title>
				<div className={cls.inputs}>
					<Controller
						control={control}
						name="name"
						render={({field}) => {
							return <Input placeholder="Имя (необязательно)" {...field} />;
						}}
					/>
					<Controller
						control={control}
						name="surname"
						render={({field}) => {
							return <Input placeholder="Фамилия (необязательно)" {...field} />;
						}}
					/>
					<Controller
						control={control}
						name="email"
						render={({field}) => {
							return <Input placeholder="Почта" {...field} />;
						}}
					/>
					<Controller
						control={control}
						name="password"
						render={({field}) => {
							return <Input placeholder="Пароль" {...field} />;
						}}
					/>
				</div>
				<div className={cls.bottom}>
					<Button type="submit">Зарегестрироваться</Button>
					<MyLink to="/login">Войти</MyLink>
				</div>
			</Block>
		</form>
	);
};

export default RegistrationPage;

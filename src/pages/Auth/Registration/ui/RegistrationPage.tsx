import {FC} from "react";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {setUser, userApi} from "src/entities";
import {AuthRequest} from "src/entities/User/model/Auth";
import {useAppDispatch} from "src/shared/lib/store";
import {RegistrationRequest} from "src/shared/types/auth/registrationTypes";
import Block from "src/shared/ui/Block/Block";
import Button from "src/shared/ui/Buttons/authSubmitBtn/Button";
import Input from "src/shared/ui/Input/Input";
import MyLink from "src/shared/ui/Link/Link";
import {Title} from "src/shared/ui/Title/Title";

import {ApiError} from "src/shared/types/error/errorTypes";
import cls from "./RegistrationPage.module.scss";


const RegistrationPage: FC = () => {
	const [registrationUser] = userApi.useFetchRegistrationMutation();
	const {t} = useTranslation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
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
		const resp = await registrationUser(data);
		if ("error" in resp) {
			const error = resp.error as ApiError;
			toast.error(error.data.message, {
				autoClose: 2000,
			});
		} else {
			dispatch(setUser(resp.data));
			navigate("/activation");
		}
	};

	return (
		<form onSubmit={handleSubmit(submit)}>
			<Block className={cls.page}>
				<Title>{t("registration.title")}</Title>
				<div className={cls.inputs}>
					<Controller
						control={control}
						name="name"
						render={({field}) => {
							return <Input placeholder={t("registration.name")} {...field} />;
						}}
					/>
					<Controller
						control={control}
						name="surname"
						render={({field}) => {
							return (
								<Input placeholder={t("registration.surname")} {...field} />
							);
						}}
					/>
					<Controller
						control={control}
						name="email"
						render={({field}) => {
							return <Input placeholder={t("registration.email")} {...field} />;
						}}
					/>
					<Controller
						control={control}
						name="password"
						render={({field}) => {
							return (
								<Input
									type="password"
									placeholder={t("registration.password")}
									{...field}
								/>
							);
						}}
					/>
				</div>
				<div className={cls.bottom}>
					<Button type="submit">{t("registration.submitButton")}</Button>
					<MyLink to="/login">{t("registration.loginButton")}</MyLink>
				</div>
			</Block>
		</form>
	);
};

export default RegistrationPage;

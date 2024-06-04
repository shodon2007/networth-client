import {FC} from "react";
import {useTranslation} from "react-i18next";
import {Controller, useForm} from "react-hook-form";

import {useLogin} from "src/entities/auth";
import MyLink from "src/shared/ui/Link/Link";
import Block from "src/shared/ui/Block/Block";
import Input from "src/shared/ui/Input/Input";
import {Title} from "src/shared/ui/Title/Title";
import Button, {ThemeButton} from "src/shared/ui/Button/Button";
import {AuthRequest} from "src/entities/auth/model/authTypes";

import cls from "./LoginPage.module.scss";

const LoginPage: FC = () => {
	const {t} = useTranslation();
	const {control, handleSubmit} = useForm<AuthRequest>({
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const loginFn = useLogin();

	return (
		<form onSubmit={handleSubmit((data) => loginFn.mutate(data))}>
			<Block className={cls.page}>
				<Title>{t("login.title")}</Title>
				<div className={cls.inputs}>
					<Controller
						control={control}
						name="email"
						render={({field}) => {
							return <Input placeholder={t("login.emailInput")} {...field} />;
						}}
					/>
					<Controller
						control={control}
						name="password"
						render={({field}) => {
							return (
								<Input
									placeholder={t("login.passwordInput")}
									type="password"
									{...field}
								/>
							);
						}}
					/>
				</div>
				<div className={cls.bottom}>
					<Button theme={ThemeButton.SUBMIT} type="submit">
						{t("login.submitButton")}
					</Button>
					<MyLink to="/registration">{t("login.registrationButton")}</MyLink>
				</div>
			</Block>
		</form>
	);
};

export default LoginPage;

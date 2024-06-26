import {FC} from "react";
import {useTranslation} from "react-i18next";
import {Controller, useForm} from "react-hook-form";

import MyLink from "src/shared/ui/Link/Link";
import Input from "src/shared/ui/Input/Input";
import Block from "src/shared/ui/Block/Block";
import {Title} from "src/shared/ui/Title/Title";
import {useRegistration} from "src/entities/auth";
import Button, {ThemeButton} from "src/shared/ui/Button/Button";
import {AuthRequest} from "src/entities/auth/model/authTypes";

import cls from "./RegistrationPage.module.scss";

const RegistrationPage: FC = () => {
	const {t} = useTranslation();
	const {control, handleSubmit} = useForm<AuthRequest>({
		defaultValues: {
			email: "",
			password: "",
			name: "",
			surname: "",
		},
	});

	const registrationMutate = useRegistration().mutate;

	return (
		<form
			data-testid="registration-form"
			onSubmit={handleSubmit((data) => registrationMutate(data))}
		>
			<Block className={cls.page}>
				<Title>{t("registration.title")}</Title>
				<div className={cls.inputs}>
					<Controller
						control={control}
						name="name"
						render={({field}) => {
							return (
								<Input
									data-testid="reigstration-name-input"
									placeholder={t("registration.name")}
									{...field}
								/>
							);
						}}
					/>
					<Controller
						control={control}
						name="surname"
						render={({field}) => {
							return (
								<Input
									data-testid="reigstration-surname-input"
									placeholder={t("registration.surname")}
									{...field}
								/>
							);
						}}
					/>
					<Controller
						control={control}
						name="email"
						render={({field}) => {
							return (
								<Input
									data-testid="reigstration-email-input"
									placeholder={t("registration.email")}
									{...field}
								/>
							);
						}}
					/>
					<Controller
						control={control}
						name="password"
						render={({field}) => {
							return (
								<Input
									data-testid="reigstration-password-input"
									type="password"
									placeholder={t("registration.password")}
									{...field}
								/>
							);
						}}
					/>
				</div>
				<div className={cls.bottom}>
					<Button
						data-testid="register-button"
						type="submit"
						theme={ThemeButton.SUBMIT}
					>
						{t("registration.submitButton")}
					</Button>
					<MyLink to="/login" data-testid="login-link">
						{t("registration.loginButton")}
					</MyLink>
				</div>
			</Block>
		</form>
	);
};

export default RegistrationPage;

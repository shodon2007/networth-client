import { FC, FormEvent } from "react";

import cls from './AuthPage.module.scss';
import Input from "src/shared/ui/inputs/authInput/Input";
import AuthForm from "src/widgets/authForm/ui/AuthForm";
import { AuthTitle } from "src/pages/Login/ui/Title/AuthTitle";
import { SubmitBtn } from "./SubmitBtn/SubmitBtn";
import { AuthLink } from "./Link/AuthLink";

const LoginPage: FC = () => {
	const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
		return console.log('submit!')
	}

	return <section className={cls.AuthPage}>
		<AuthTitle>Authentication</AuthTitle>
		<AuthForm onSubmit={handleSubmit} className={cls.AuthForm}>
			<Input type="text" >Email</Input>
			<Input type="text" >Password</Input>
		</AuthForm>
		<div className={cls.AuthPageFooter}>
			<SubmitBtn>Log In</SubmitBtn>
			<AuthLink href='/'>Create account</AuthLink>
		</div>
	</section>;
};

export default LoginPage;
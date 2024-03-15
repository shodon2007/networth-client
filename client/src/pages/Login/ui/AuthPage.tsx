import { FC, FormEvent } from "react";

import cls from './AuthPage.module.scss';
import Input from "src/shared/ui/inputs/authInput/Input";
import AuthForm from "src/widgets/authForm/ui/AuthForm";
import { AuthTitle } from "src/pages/Login/ui/Title/AuthTitle";
import { SubmitBtn } from "./SubmitBtn/SubmitBtn";
import { AuthLink } from "./Link/AuthLink";

const AuthPage: FC = () => {
	const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
		return console.log('submit!')
	}

	return <section className={cls.AuthPage}>
		<AuthTitle>Authentication</AuthTitle>
		<AuthForm onSubmit={handleSubmit} className={cls.AuthForm}>
			<Input type="text" >Firt Name</Input>
			<Input type="text" >Last Name</Input>
			<Input type="text" >Email</Input>
			<Input type="text" >Password</Input>
			<Input type="text" >Check Password</Input>
			<Input type="text" >Phone Number</Input>
		</AuthForm>
		<div className={cls.AuthPageFooter}>
			<SubmitBtn>Sign Up</SubmitBtn>
			<AuthLink href='/login'>Log In</AuthLink>
		</div>
	</section>;
};

export default AuthPage;

import { FC, FormEvent } from "react";

import Input from "src/shared/ui/inputs/authInput/Input";
import AuthForm from "src/widgets/authForm/ui/AuthForm";
import cls from './AuthTemplate.module.scss';
import { SubmitBtn } from "src/shared/ui/AuthSubmitBtn/AuthSubmitBtn";
import { AuthLink } from "src/shared/ui/Links/loginLinks/AuthLink";
import { AuthTitle } from "src/shared/ui/Title/AuthTitle";

interface LoginEntityProps { fun: (user: any) => Promise<void>}

const LoginEntity: FC<LoginEntityProps> = ({ fun }) => {

	return <section className={cls.AuthPage}>
		<AuthTitle>Authentication</AuthTitle>
		{/* <p className={cls.errorMsg}>{auth.msgErr}</p> */}
		<AuthForm onSubmit={fun} className={cls.AuthForm}>
			<Input type="text" id="email">Email</Input>
			<Input type="text" id="password">Password</Input>
		</AuthForm>
		<div className={cls.AuthPageFooter}>
			<SubmitBtn>Log In</SubmitBtn>
			<AuthLink href='/'>Create account</AuthLink>
		</div>
	</section>;
};

export default LoginEntity;
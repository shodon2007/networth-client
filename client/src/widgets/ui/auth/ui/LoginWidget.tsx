import { FC } from "react";

import Input from "src/shared/ui/inputs/authInput/Input";
import AuthForm from "../../authForm/ui/AuthForm";
import cls from './AuthTemplate.module.scss';
import { SubmitBtn } from "src/shared/ui/AuthSubmitBtn/AuthSubmitBtn";
import { AuthLink } from "src/shared/ui/Links/loginLinks/AuthLink";
import { AuthTitle } from "src/shared/ui/Title/AuthTitle";

interface LoginWidgetProps { }

const LoginWidget: FC<LoginWidgetProps> = ({ }) => {

	return <section className={cls.AuthPage}>
		<AuthTitle>Authentication</AuthTitle>
		{/* <p className={cls.errorMsg}>{auth.msgErr}</p> */}
		<AuthForm
			onSubmit={() => new Promise((resolve, reject) => { resolve(console.log('hello')) })}
			className={cls.AuthForm}
		>
			<Input type="text" id="email">Email</Input>
			<Input type="text" id="password">Password</Input>
		</AuthForm>
		<div className={cls.AuthPageFooter}>
			<SubmitBtn>Log In</SubmitBtn>
			<AuthLink href='/'>Create account</AuthLink>
		</div>
	</section>;
};

export default LoginWidget;
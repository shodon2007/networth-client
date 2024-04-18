import { FC } from "react";

import Input from "src/shared/ui/inputs/authInput/Input";
import cls from './AuthTemplate.module.scss';
import { SubmitBtn } from "src/shared/ui/Buttons/AuthSubmitBtn/AuthSubmitBtn";
import { AuthLink } from "src/shared/ui/Links/AuthLinks/AuthLink";
import { Title } from "src/shared/ui/Title/Title";

interface LoginWidgetProps { }

const LoginWidget: FC<LoginWidgetProps> = ({ }) => {

	return <section className={cls.AuthPage}>
		<Title>Authentication</Title>
		{/* <p className={cls.errorMsg}>{auth.msgErr}</p> */}
		<form
			onSubmit={() => new Promise((resolve, reject) => { resolve(console.log('hello')) })}
			className={cls.AuthForm}
		>
			<Input type="text" id="email">Email</Input>
			<Input type="text" id="password">Password</Input>
		</form>
		<div className={cls.AuthPageFooter}>
			<SubmitBtn>Log In</SubmitBtn>
			<AuthLink href='/'>Create account</AuthLink>
		</div>
	</section>;
};

export default LoginWidget;
import { FC } from "react";

import Input from "src/shared/ui/inputs/authInput/Input";
import AuthForm from "../../authForm/ui/AuthForm";
import cls from './AuthTemplate.module.scss';
import { AuthLink } from "src/shared/ui/Links/loginLinks/AuthLink";
import { Title } from "src/shared/ui/Title/Title";
import Button, { ThemeButton } from "src/shared/ui/Button/Button";

interface LoginWidgetProps { }

const LoginWidget: FC<LoginWidgetProps> = ({ }) => {

	return <section className={cls.AuthPage}>
		<Title>Authentication</Title>
		{/* <p className={cls.errorMsg}>{auth.msgErr}</p> */}
		<AuthForm
			onSubmit={() => new Promise((resolve, reject) => { resolve(console.log('hello')) })}
			className={cls.AuthForm}
		>
			<Input type="text" id="email">Email</Input>
			<Input type="text" id="password">Password</Input>
		</AuthForm>
		<div className={cls.AuthPageFooter}>
			<Button theme={ThemeButton.SUBMIT_BUTTON}>Log In</Button>
			<AuthLink href='/'>Create account</AuthLink>
		</div>
	</section>;
};

export default LoginWidget;
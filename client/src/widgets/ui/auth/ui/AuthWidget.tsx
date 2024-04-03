import { FC } from "react";

import Input from "src/shared/ui/inputs/authInput/Input";
import AuthForm from "../../authForm/ui/AuthForm";
import cls from './AuthTemplate.module.scss';
import { SubmitBtn } from "src/shared/ui/AuthSubmitBtn/AuthSubmitBtn";
import { AuthLink } from "src/shared/ui/Links/loginLinks/AuthLink";
import { Title } from "src/shared/ui/Title/Title";

interface AuthWidgetProps { }

const AuthWidget: FC<AuthWidgetProps> = ({ }) => {

	return <section className={cls.AuthPage}>
		<Title>Authentication</Title>
		{/* <p className={cls.errorMsg}>{auth.msgErr}</p> */}
		{/* // TODO: Create auth funciton in 'features folder' and give it to 'onSubmit' property */}
		<AuthForm
			onSubmit={() => new Promise((resolve, reject) => { resolve(console.log('hello')) })}
			className={cls.AuthForm}
		>
			<Input type="text" id="firstName">Firt Name</Input>
			<Input type="text" id="lastName">Last Name</Input>
			<Input type="text" id="email">Email</Input>
			<Input type="text" id="Password">Password</Input>
			<Input type="text" id="doublePassword">Check Password</Input>
			<Input type="text" id="phoneNumber">Phone Number</Input>
		</AuthForm>
		<div className={cls.AuthPageFooter}>
			<SubmitBtn>Sign Up</SubmitBtn>
			<AuthLink href='/login'>Log In</AuthLink>
		</div>
	</section>;
};

export default AuthWidget;
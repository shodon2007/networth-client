import { FC } from "react";

import Button, { ThemeButton } from "src/shared/ui/Button/Button";
import { AuthLink } from "src/shared/ui/Links/AuthLinks/AuthLink";
import { Title } from "src/shared/ui/Title/Title";
import Input from "src/shared/ui/inputs/authInput/Input";
import cls from './AuthTemplate.module.scss';

interface AuthWidgetProps { }

const AuthWidget: FC<AuthWidgetProps> = ({ }) => {

	return <section className={cls.AuthPage}>
		<Title>Authentication</Title>
		{/* <p className={cls.errorMsg}>{auth.msgErr}</p> */}
		{/* // TODO: Create auth funciton in 'features folder' and give it to 'onSubmit' property */}
		<form
			onSubmit={() => new Promise((resolve, reject) => { resolve(console.log('hello')) })}
			className={cls.AuthForm}
		>
			<Input type="text" id="firstName">Firt Name</Input>
			<Input type="text" id="lastName">Last Name</Input>
			<Input type="text" id="email">Email</Input>
			<Input type="text" id="Password">Password</Input>
			<Input type="text" id="doublePassword">Check Password</Input>
			<Input type="text" id="phoneNumber">Phone Number</Input>
		</form>
		<div className={cls.AuthPageFooter}>
			<Button theme={ThemeButton.SUBMIT_BUTTON}>Sign Up</Button>
			<AuthLink href='/login'>Log In</AuthLink>
		</div>
	</section>;
};

export default AuthWidget;
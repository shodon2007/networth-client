import {FC} from "react";

import Input from "src/shared/ui/inputs/authInput/Input";
import cls from "./AuthTemplate.module.scss";
import {AuthLink} from "src/shared/ui/Links/loginLinks/AuthLink";
import {Title} from "src/shared/ui/Title/Title";
import Button, {ThemeButton} from "src/shared/ui/Button/Button";
import Block from "src/shared/ui/Block/Block";

interface AuthWidgetProps {}

const AuthWidget: FC<AuthWidgetProps> = () => {
	return (
		<Block className={cls.AuthPage}>
			<Title>Authentication</Title>
			{/* <p className={cls.errorMsg}>{auth.msgErr}</p> */}
			{/* // TODO: Create auth funciton in 'features folder' and give it to 'onSubmit' property */}
			<div className={cls.AuthForm}>
				<Input type="text" id="email">
					Email
				</Input>
				<Input type="text" id="Password">
					Password
				</Input>
				<Input type="text" id="doublePassword">
					Check Password
				</Input>
			</div>
			<div className={cls.AuthPageFooter}>
				<Button theme={ThemeButton.SUBMIT_BUTTON}>Sign Up</Button>
				<AuthLink href="/login">Log In</AuthLink>
			</div>
		</Block>
	);
};

export default AuthWidget;

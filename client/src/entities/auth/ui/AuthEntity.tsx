import {FC, FormEvent} from "react";

import Input from "src/shared/ui/inputs/authInput/Input";
import AuthForm from "src/widgets/authForm/ui/AuthForm";
import cls from "./AuthTemplate.module.scss";
import {SubmitBtn} from "src/shared/ui/AuthSubmitBtn/AuthSubmitBtn";
import {AuthLink} from "src/shared/ui/Links/loginLinks/AuthLink";
import {AuthTitle} from "src/shared/ui/Title/Title";

interface AuthEntityProps {
	fun: (user: any) => Promise<void>;
}

const AuthEntity: FC<AuthEntityProps> = ({fun}) => {
	return (
		<section className={cls.AuthPage}>
			<AuthTitle>Authentication</AuthTitle>
			{/* <p className={cls.errorMsg}>{auth.msgErr}</p> */}
			<AuthForm onSubmit={fun} className={cls.AuthForm}>
				<Input type="text" id="firstName">
					Firt Name
				</Input>
				<Input type="text" id="lastName">
					Last Name
				</Input>
				<Input type="text" id="email">
					Email
				</Input>
				<Input type="text" id="Password">
					Password
				</Input>
				<Input type="text" id="doublePassword">
					Check Password
				</Input>
				<Input type="text" id="phoneNumber">
					Phone Number
				</Input>
			</AuthForm>
			<div className={cls.AuthPageFooter}>
				<SubmitBtn>Sign Up</SubmitBtn>
				<AuthLink href="/login">Log In</AuthLink>
			</div>
		</section>
	);
};

export default AuthEntity;

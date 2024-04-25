import { ChangeEvent, FC, useCallback, useState } from "react";

import Input from "src/shared/ui/inputs/authInput/Input";
import cls from './AuthTemplate.module.scss';
import { AuthLink } from "src/shared/ui/Links/AuthLinks/AuthLink";
import { Title } from "src/shared/ui/Title/Title";
import Button, { ThemeButton } from "src/shared/ui/Button/Button";
import { login } from "src/shared/lib/Auth/helper/AuthSlice";
import { UserLogData } from "src/shared/types/UserTypes/UserLogType";
import { useAppDispatch } from "src/shared/lib/Redux/model";

interface LoginWidgetProps { }

const LoginWidget: FC<LoginWidgetProps> = ({ }) => {

	const [logUser, setLogUser] = useState<UserLogData>({
		email: "",
		password: "",
	})
	const changeLogUser = (e: ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target
		setLogUser({
			...logUser,
			[id]: value
		})
	}

	return <section className={cls.AuthPage}>
		<Title>Log In</Title>
		{/* <p className={cls.errorMsg}>{auth.msgErr}</p> */}
		<form
			onSubmit={() => console.log('hello')}
			className={cls.AuthForm}
		>
			<Input
				type="text"
				id="email"
				value={logUser.email}
				onChange={e => changeLogUser(e)}
			>Email</Input>
			<Input
				type="text"
				id="password"
				value={logUser.password}
				onChange={e => changeLogUser(e)}
			>Password</Input>
		</form>
		<div className={cls.AuthPageFooter}>
			<Button theme={ThemeButton.SUBMIT_BUTTON} onClick={() => console.log('hello')} disabled={emptyField} >Log In</Button>
			<AuthLink href='/'>Create account</AuthLink>
		</div>
	</section>;
};

export default LoginWidget;
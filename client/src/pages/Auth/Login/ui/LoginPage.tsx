import {FC} from "react";
import Input from "src/shared/ui/Input/Input";
import cls from "./LoginPage.module.scss";
import Button from "src/shared/ui/Button/Button";
import loginSubmit from "src/features/Auth/loginSubmit";
import Block from "src/shared/ui/Block/Block";
import {Title} from "src/shared/ui/Title/Title";
import MyLink from "src/shared/ui/Link/Link";

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
	const email = "work@shodon.ru";
	const password = "shodon2007";
	return (
		<Block>
			<form className={cls.page}>
				<Title>Login</Title>
				<div className={cls.inputs}>
					<Input placeholder="введите email" />
					<Input placeholder="введите пароль" />
				</div>
				<div className={cls.bottom}>
					<Button onClick={() => loginSubmit({email, password})}>Войти</Button>
					<MyLink to="/registration">Создать аккаунт</MyLink>
				</div>
			</form>
		</Block>
	);
};

export default LoginPage;

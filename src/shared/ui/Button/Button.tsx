import {ButtonHTMLAttributes, FC, ReactNode, memo} from "react";
import classNames from "src/shared/lib/classNames";

import cls from "./Button.module.scss";

export enum ThemeButton {
	CLEAR = "clear",
	SMALL = "small",
	SUBMIT = "submit",
	RED = "red",
}

type themeButton = "clear" | "small" | "submit" | "red" | "active" | "";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: ReactNode;
	theme?: themeButton;
}

const Button: FC<ButtonProps> = memo((props) => {
	const {children, theme = "", className = "", ...args} = props;
	return (
		<button
			className={classNames(cls.button, {}, [cls[theme], className])}
			{...args}
		>
			{children}
		</button>
	);
});

export default Button;

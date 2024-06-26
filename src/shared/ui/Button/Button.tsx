import {ButtonHTMLAttributes, FC, ReactNode, memo} from "react";
import classNames from "src/shared/lib/classNames";

import cls from "./Button.module.scss";

export enum ThemeButton {
	CLEAR = "clear",
	SMALL = "small",
	SUBMIT = "submit",
	RED = "red",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: ReactNode;
	theme?: ThemeButton;
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

import {ButtonHTMLAttributes, FC, ReactNode} from "react";
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

const Button: FC<ButtonProps> = ({
	children,
	theme = "",
	className = "",
	...props
}) => {
	return (
		<button
			className={classNames(cls.Button, {}, [cls[theme], className])}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;

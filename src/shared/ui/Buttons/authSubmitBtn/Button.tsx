import {ButtonHTMLAttributes, FC, ReactNode} from "react";

import cls from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
}

const Button: FC<ButtonProps> = ({children, onClick, ...rest}) => {
	return (
		<button className={cls.Button} onClick={onClick} {...rest}>
			{children}
		</button>
	);
};

export default Button;

import {InputHTMLAttributes, FC} from "react";
import cls from "./Input.module.scss";
import classNames from "src/shared/lib/classNames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	classname?: string;
}

const Input: FC<InputProps> = ({children, classname = "", ...props}) => {
	return (
		<input className={classNames(cls.Input, {}, [classname])} {...props} />
	);
};

export default Input;

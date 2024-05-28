import {InputHTMLAttributes, FC} from "react";
import cls from "./Input.module.scss";
import classNames from "src/shared/lib/classNames";

export enum InputSize {
	big = "BIG",
	small = "SMALL",
	medium = "MEDIUM",
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	classname?: string;
	fontSize?: InputSize;
	placeholderOutside?: boolean;
}

const Input: FC<InputProps> = ({
	classname = "",
	fontSize = InputSize.medium,
	placeholderOutside = false,
	...props
}) => {
	if (placeholderOutside) {
		return (
			<>
				<div>{props.name}</div>
				<input
					className={classNames(cls.Input, {}, [classname, cls[fontSize]])}
					{...props}
				/>
			</>
		);
	}

	return (
		<input
			className={classNames(cls.Input, {}, [classname, cls[fontSize]])}
			{...props}
		/>
	);
};

export default Input;

import {FC, InputHTMLAttributes, LegacyRef, forwardRef} from "react";
import classNames from "src/shared/lib/classNames";

import cls from "./Input.module.scss";

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

const Input: FC<InputProps> = forwardRef(function Input({
	classname = "",
	fontSize = InputSize.medium,
	placeholderOutside = false,
	...props
}: InputProps, ref: LegacyRef<HTMLInputElement> ) {
	if (placeholderOutside) {
		return (
			<>
				<div>{props.placeholder}</div>
				<input
					ref={ref}
					className={classNames(cls.Input, {}, [classname, cls[fontSize]])}
					{...props}
				/>
			</>
		);
	}

	return (
		<input
			ref={ref}
			className={classNames(cls.Input, {}, [classname, cls[fontSize]])}
			{...props}
		/>
	);
});

export default Input;

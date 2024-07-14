import {FC, InputHTMLAttributes, LegacyRef, forwardRef} from "react";
import classNames from "src/shared/lib/classNames";

import cls from "./Input.module.scss";

export enum InputSize {
	big = "BIG",
	small = "small",
	medium = "medium",
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	classname?: string;
	fontSize?: InputSize;
	placeholderOutside?: boolean;
}

const Input: FC<InputProps> = forwardRef(function Input(
	{
		classname = "",
		fontSize = InputSize.medium,
		placeholderOutside = false,
		...props
	}: InputProps,
	ref: LegacyRef<HTMLInputElement>,
) {
	return (
		<div data-testid={"input-parent"}>
			{placeholderOutside ? (
				<div data-testid="input-placeholder">{props.placeholder}</div>
			) : null}
			<input
				data-testid={"input"}
				ref={ref}
				className={classNames(cls.input, {}, [classname, cls[fontSize]])}
				{...props}
			/>
		</div>
	);
});

export default Input;

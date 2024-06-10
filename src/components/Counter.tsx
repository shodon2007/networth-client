import { FC, useState } from "react";
import cls from "./Counter.module.scss";

console.log(cls);

export const Counter: FC = () => {
	const [value, setValue] = useState(0);
	return (
		<div>
			<h1>{value}</h1>
			<button onClick={setValue.bind(null, (prev: number) => ++prev)}>
        increment
			</button>
			<button
				className={cls.button}
				onClick={setValue.bind(null, (prev: number) => --prev)}
			>
        decrement
			</button>
		</div>
	);
};

import {FC, ReactNode} from "react";
import classNames from "src/shared/lib/classNames";

import cls from "./Block.module.scss";

export enum BlockTypes {
	DEFAULT = "default",
	BRIGHTER = "brighter",
}
interface BlockProps {
	children: ReactNode;
	type?: BlockTypes;
	className?: string;
}

const Block: FC<BlockProps> = ({
	children,
	type = "default",
	className = "",
}) => {
	return (
		<div
			data-testid="block"
			className={classNames(cls.block, {}, [cls[type], className])}
		>
			{children}
		</div>
	);
};

export default Block;

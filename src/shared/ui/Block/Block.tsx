import {FC, ReactNode} from "react";
import cls from "./Block.module.scss";
import classNames from "src/shared/lib/classNames";

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
		<div className={classNames(cls.block, {}, [cls[type], className])}>
			{children}
		</div>
	);
};

export default Block;

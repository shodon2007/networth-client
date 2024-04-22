import {FC, ReactNode} from "react";
import cls from "./Block.module.scss";
import classNames from "src/shared/lib/classNames";

interface BlockProps {
	children: ReactNode;
	className?: string;
}

const Block: FC<BlockProps> = ({children, className = ""}) => {
	return (
		<div className={classNames(cls.block, {}, [className])}>{children}</div>
	);
};

export default Block;

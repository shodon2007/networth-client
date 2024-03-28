import {FC, ReactNode} from "react";
import cls from "./Block.module.scss";

interface BlockProps {
	children: ReactNode;
}

const Block: FC<BlockProps> = ({children}) => {
	return <div className={cls.block}>{children}</div>;
};

export default Block;

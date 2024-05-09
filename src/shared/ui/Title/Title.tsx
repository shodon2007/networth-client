import {ReactNode} from "react";
import cls from "./Title.module.scss";

interface TitleProps {
	children: ReactNode;
}

export const Title = ({children}: TitleProps) => {
	return <h1 className={cls.title}>{children}</h1>;
};

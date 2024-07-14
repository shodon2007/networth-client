import {ReactNode} from "react";
import classNames from "src/shared/lib/classNames";

import cls from "./Title.module.scss";

export enum TitleType {
	SMALL = "SMALL",
	MIDDLE = "MIDDLE",
	BIG = "BIG",
}

interface TitleProps {
	children: ReactNode;
	type?: TitleType;
}

export const Title = ({children, type = TitleType.MIDDLE}: TitleProps) => {
	return <h1 className={classNames(cls.title, {}, [cls[type]])}>{children}</h1>;
};

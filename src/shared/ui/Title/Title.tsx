import {ReactNode} from "react";
import classNames from "src/shared/lib/classNames";

import cls from "./Title.module.scss";

export enum TitleType {
	small = "SMALL",
	middle = "MIDDLE",
	big = "BIG",
}

interface TitleProps {
	children: ReactNode;
	type?: TitleType;
}

export const Title = ({children, type = TitleType.middle}: TitleProps) => {
	return <h1 className={classNames(cls.title, {}, [cls[type]])}>{children}</h1>;
};

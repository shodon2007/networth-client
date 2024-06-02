import {FC, ReactNode} from "react";
import {NavLink, NavLinkProps} from "react-router-dom";
import classNames from "src/shared/lib/classNames";

import cls from "./Link.module.scss";

interface LinkProps extends NavLinkProps {
	children: ReactNode;
	className?: string;
	to: string;
}

const MyLink: FC<LinkProps> = ({children, to, className, ...props}) => {
	return (
		<NavLink
			className={classNames(cls.link, {}, [className])}
			to={to}
			{...props}
		>
			{children}
		</NavLink>
	);
};

export default MyLink;

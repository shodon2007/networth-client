import {FC, ReactNode} from "react";

import cls from "./Link.module.scss";
import {Link, NavLinkProps} from "react-router-dom";

interface LinkProps extends NavLinkProps {
	children: ReactNode;
	to: string;
}

const MyLink: FC<LinkProps> = ({children, to, ...props}) => {
	return (
		//@ts-ignore
		<Link className={cls.link} to={to} {...props}>
			{children}
		</Link>
	);
};

export default MyLink;

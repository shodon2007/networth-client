import { ReactNode } from "react";
import { Link } from "react-router-dom";
import classNames from "src/shared/lib/classNames";

import cls from "./AsideLinks.module.scss";

interface AsideLinksProps { children: ReactNode, href: string }

export const AsideLinks = ({ children, href, ...props }: AsideLinksProps) => {

	return (
		<Link
			to={href}
			className={classNames(cls.Link, {}, [])}
			{...props}>
			{children}
		</Link>
	);
};
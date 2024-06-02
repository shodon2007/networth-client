import { ReactNode } from "react";
import { Link } from "react-router-dom";

import cls from "./AuthLink.module.scss";

interface AuthLinkProps  { 
  children: ReactNode,
  href: string
}

export const AuthLink = ({ children, href }: AuthLinkProps) => {
	return (
		<Link to={href} className={cls.AuthLink}>{children}</Link>
	);
};
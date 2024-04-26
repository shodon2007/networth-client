import {FC, ReactNode} from "react";
import { useSelector } from "react-redux";
import { RootState } from "../providers/storeProvider";
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from "react-toastify";

interface CheckPermissionProps {
	children: ReactNode;
}

const authPaths = ['/login', '/registration']

const CheckPermission: FC<CheckPermissionProps> = ({children}) => {
	const { pathname } = useLocation();
	const user = useSelector((state: RootState) => state.user);

	if (user.isAuth && authPaths.includes(pathname)) {
		toast('Вы уже вошли в аккаунт')
		return <Navigate to={'/'} />;
	} 
	if (!user.isAuth && !authPaths.includes(pathname)) {
		toast('Сначала авторизуйся а потом по сайту катайся!')
		return <Navigate to={'/login'} />;
	}
	if (user.isAuth && user.user?.isActivated === 0) {
		toast('Пожалуйста, активируйте аккаунт!')
		return <Navigate to={'/activation'} />
	}
	if (pathname === '/activation' && (!user || user.user?.isActivated)) {
		toast('Вы уже активировали аккаунт!')
		return <Navigate to={'/'} />
	}

	return children;
};

export default CheckPermission;
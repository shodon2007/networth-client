import {ProfilePage} from "src/pages/Profile/ui/ProfilePage";
import {LoginPage} from "src/pages/Auth/Login";
import {Layout} from "src/shared/ui/Layout/Layout";
import {FeedPage} from "src/pages/Feed";
import RegistrationPage from "src/pages/Auth/Registration/ui/RegistrationPage";
import ActivationPage from "src/pages/Auth/Activation/ActivationPage";
import {ReactNode} from "react";
import {Route} from "react-router-dom";
import CheckPermission from "src/app/hoc/CheckPermission";

export enum AppRoutes {
	REGISTRATION = "registration",
	LOGIN = "login",
	ACTIVATION = "activation",

	MAIN = "main",
	PROFILE = "profile",
}

export const routePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "",
	[AppRoutes.PROFILE]: "/profile",
	[AppRoutes.LOGIN]: "/login",
	[AppRoutes.REGISTRATION]: "/registration",
	[AppRoutes.ACTIVATION]: "/activation",
};

interface RouteItem {
	path: string;
	element: ReactNode;
	index?: boolean;
	children?: RouteItem[];
}

const privateRoutes: RouteItem[] = [
	{
		path: routePath.main,
		element: <Layout />,
		children: [
			{
				path: routePath.main,
				element: <FeedPage />,
				index: true,
			},
			{
				path: routePath.profile,
				element: <ProfilePage />,
			},
		],
	},
];

const publicRoutes: RouteItem[] = [
	{
		path: routePath.main,
		element: <Layout />,
		children: [
			{
				path: routePath.registration,
				element: <RegistrationPage />,
			},
			{
				path: routePath.login,
				element: <LoginPage />,
			},
			{
				path: routePath.activation,
				element: <ActivationPage />,
			},
		],
	},
];

const renderRoutes = (routes: RouteItem[]) => {
	return routes.map(({element, path, children}) => (
		<Route
			key={path}
			element={<CheckPermission>{element}</CheckPermission>}
			path={path}
		>
			{children && <>{renderRoutes(children)}</>}
		</Route>
	));
};

export {publicRoutes, privateRoutes, renderRoutes};

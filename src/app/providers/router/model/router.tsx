import {ReactNode} from "react";
import {Route} from "react-router-dom";
import {ActivationPage} from "src/pages/Auth/Activation";
import {LoginPage} from "src/pages/Auth/Login";
import {RegistrationPage} from "src/pages/Auth/Registration";
import {FeedPage} from "src/pages/Feed";
import {MessengerPage} from "src/pages/Messenger";
import {ProfilePage} from "src/pages/Profile/ui/ProfilePage";
import {Layout} from "src/shared/ui/Layout/Layout";

export enum AppRoutes {
	REGISTRATION = "registration",
	LOGIN = "login",
	ACTIVATION = "activation",

	MAIN = "main",
	PROFILE = "profile",
	MESSENGER = "messenger",
}

export const routePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "",
	[AppRoutes.PROFILE]: "/profile",
	[AppRoutes.LOGIN]: "/login",
	[AppRoutes.REGISTRATION]: "/registration",
	[AppRoutes.ACTIVATION]: "/activation",
	[AppRoutes.MESSENGER]: "/messanger",
};

interface RouteItem {
	path: string;
	element: ReactNode;
	index?: boolean;
	children?: RouteItem[];
}

const routes: RouteItem[] = [
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
				index: true,
			},
			{
				path: routePath.messenger,
				element: <MessengerPage />,
				index: true,
			},
			{
				path: routePath.activation,
				element: <ActivationPage />,
			},
			{
				path: routePath.registration,
				element: <RegistrationPage />,
			},
			{
				path: routePath.login,
				element: <LoginPage />,
			},
		],
	},
];

const renderRoutes = (routes: RouteItem[]) => {
	return routes.map(({element, path, children}) => (
		<Route key={path} element={element} path={path}>
			{children && <>{renderRoutes(children)}</>}
		</Route>
	));
};

export {routes, renderRoutes};

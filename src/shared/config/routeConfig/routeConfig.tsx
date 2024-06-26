import {ReactNode} from "react";
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

	HOME = "home",
	PROFILE = "profile",
	MESSENGER = "messenger",
}

export const routePath: Record<AppRoutes, string> = {
	[AppRoutes.HOME]: "",
	[AppRoutes.PROFILE]: "/profile",
	[AppRoutes.LOGIN]: "/login",
	[AppRoutes.REGISTRATION]: "/registration",
	[AppRoutes.ACTIVATION]: "/activation",
	[AppRoutes.MESSENGER]: "/messanger",
};

export interface RouteItem {
	path: string;
	element: ReactNode;
	index?: boolean;
	children?: RouteItem[];
}

export const routes: RouteItem[] = [
	{
		path: routePath.home,
		element: <Layout />,
		children: [
			{
				path: routePath.home,
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

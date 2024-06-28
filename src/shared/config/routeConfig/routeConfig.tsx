import {ReactNode} from "react";
import {ActivationPageAsync} from "src/pages/Auth/Activation";
import {LoginPageAsync} from "src/pages/Auth/Login";
import {RegistrationPageAsync} from "src/pages/Auth/Registration";
import {FeedPageAsync} from "src/pages/Feed";
import {MessengerPageAsync} from "src/pages/Messenger";
import {ProfilePageAsync} from "src/pages/Profile";
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
				element: <FeedPageAsync />,
				index: true,
			},
			{
				path: routePath.profile,
				element: <ProfilePageAsync />,
				index: true,
			},
			{
				path: routePath.messenger,
				element: <MessengerPageAsync />,
				index: true,
			},
			{
				path: routePath.activation,
				element: <ActivationPageAsync />,
			},
			{
				path: routePath.registration,
				element: <RegistrationPageAsync />,
			},
			{
				path: routePath.login,
				element: <LoginPageAsync />,
			},
		],
	},
];

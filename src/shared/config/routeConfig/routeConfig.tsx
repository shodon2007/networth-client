import {ReactNode} from "react";
import {ActivationPageAsync} from "src/pages/Auth/Activation";
import {LoginPageAsync} from "src/pages/Auth/Login";
import {RegistrationPageAsync} from "src/pages/Auth/Registration";
import {FeedPageAsync} from "src/pages/Feed";
import {FriendsPageAsync} from "src/pages/Friends";
import {MessengerPageAsync} from "src/pages/Messenger";
import {NotFoundPageAsync} from "src/pages/NotFound";
import {ProfilePageAsync} from "src/pages/Profile";

enum AppRoutes {
	REGISTRATION = "registration",
	LOGIN = "login",
	ACTIVATION = "activation",

	HOME = "home",
	PROFILE = "profile",
	MESSENGER = "messenger",
	FRIENDS = "friends",
	NOT_FOUND = "not_found",
}

const routePath: Record<AppRoutes, string> = {
	[AppRoutes.HOME]: "/",
	[AppRoutes.PROFILE]: "/profile/*",
	[AppRoutes.LOGIN]: "/login/*",
	[AppRoutes.REGISTRATION]: "/registration/*",
	[AppRoutes.ACTIVATION]: "/activation/*",
	[AppRoutes.MESSENGER]: "/messanger/*",
	[AppRoutes.FRIENDS]: "/friends/*",
	[AppRoutes.NOT_FOUND]: "*",
};

export interface RouteItem {
	path: string;
	element: ReactNode;
	index?: boolean;
	children?: RouteItem[];
}

const privateRoutes: RouteItem[] = [
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
		path: routePath.friends,
		element: <FriendsPageAsync />,
	},
	{
		path: routePath.not_found,
		element: <NotFoundPageAsync />,
	},
];

const publicRoutes: RouteItem[] = [
	{
		path: routePath.home,
		element: <FeedPageAsync />,
		index: true,
	},
	{
		path: routePath.registration,
		element: <RegistrationPageAsync />,
	},
	{
		path: routePath.login,
		element: <LoginPageAsync />,
	},
	{
		path: routePath.not_found,
		element: <NotFoundPageAsync />,
	},
];

export default {
	publicRoutes,
	privateRoutes,
	routePath,
	AppRoutes,
};

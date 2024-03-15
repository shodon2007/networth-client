import {RouteProps} from "react-router-dom";
import AuthPage from "src/pages/Login/ui/AuthPage";
import LoginPage from "src/pages/Login/ui/LoginPage";

const routes: RouteProps[] = [
	{
		path: "/",
		element: <AuthPage />,
	},
	{
		path: "/login",
		element: <LoginPage></LoginPage>,
	},
];

export default routes;

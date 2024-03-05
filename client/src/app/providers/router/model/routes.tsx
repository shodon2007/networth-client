import {RouteProps} from "react-router-dom";
import { MainPage } from "src/pages/mainPage";

const routes: RouteProps[] = [
	{
		path: "/",
		element: <MainPage />,
	},
	{
		path: "/f",
		element: <div>hello f</div>,
	},
];

export default routes;

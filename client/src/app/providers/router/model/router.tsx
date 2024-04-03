import {Navigate, createBrowserRouter} from "react-router-dom";

import {Layout} from "src/shared/ui/Layout";

import {ProfilePage} from "src/pages/Profile/ui/ProfilePage";
import {LoginPage} from "src/pages/Auth/Login";

const MainRouter = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
      {
				path: "/main/feed",
        element: <FeedPage />,
			},
			{
				path: "login",
				element: <LoginPage />,
			},
			{
				path: "main/feed",
				element: <h1>Hello</h1>,
			},
			{
				path: "main/profile",
				element: <ProfilePage />,
			},
		],
	},
]);

export default MainRouter;

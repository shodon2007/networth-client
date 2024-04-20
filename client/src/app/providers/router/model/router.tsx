import {createBrowserRouter} from "react-router-dom";

import {ProfilePage} from "src/pages/Profile/ui/ProfilePage";
import {LoginPage} from "src/pages/Auth/Login";
import {Layout} from "src/shared/ui/Layout/Layout";
import {FeedPage} from "src/pages/Feed";
import AuthWidget from "src/widgets/ui/auth/ui/AuthWidget";

const MainRouter = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <FeedPage />,
				// index: true,
			},
			{
				path: "/registration",
				element: <AuthWidget />,
			},
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				path: "/profile",
				element: <ProfilePage />,
			},
		],
	},
]);

export default MainRouter;

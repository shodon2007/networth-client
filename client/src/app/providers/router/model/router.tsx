import {createBrowserRouter} from "react-router-dom";

import {ProfilePage} from "src/pages/Profile/ui/ProfilePage";
import {LoginPage} from "src/pages/Auth/Login";
import {Layout} from "src/shared/ui/Layout/Layout";
import {FeedPage} from "src/pages/Feed";
import RegistrationPage from "src/pages/Auth/Registration/ui/RegistrationPage";

const MainRouter = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <FeedPage />,
				index: true,
			},
			{
				path: "/registration",
				element: <RegistrationPage />,
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

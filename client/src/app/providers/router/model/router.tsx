
import { createBrowserRouter } from "react-router-dom";

import { ProfilePage } from "src/pages/Profile/ui/ProfilePage";
import { LoginPage } from "src/pages/Auth/Login";
import { MainLayout } from "src/widgets";
import { FeedPage } from "src/pages/Feed";
import AuthWidget from "src/widgets/ui/auth/ui/AuthWidget";

const MainRouter = createBrowserRouter([
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/",
		element: <AuthWidget />,
	},
	{
		path: "/main",
		element: <MainLayout />,
		children: [
			{
				path: '/main/feed',
				element: <FeedPage />
			},
			{
				path: '/main/profile',
				element: <ProfilePage />
			}
		]
	},
]);

export default MainRouter;

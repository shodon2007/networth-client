import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "src/entities";
import { FeedPage } from "src/pages/Feed/ui/FeedPage";
import { ProfilePage } from "src/pages/Profile/ui/ProfilePage";


const MainRouter = createBrowserRouter([
	// {
	// 	path: "/",
	// 	element: <AuthPage />,
	// },
	// {
	// 	path: "/login",
	// 	element: <LoginPage />,
	// },
	// {
	// 	path: "/main",
	// 	element: <MainLayout />,
	// 	children: [
	{
		path: "/main",
		element: <MainLayout />,
		children: [
      {
				path: "/main/feed",
        element: <h1>Hello</h1>,
			},
			{
				path: "/main/profile",
				element: <ProfilePage />,
			}
		]
	},
	// ]
	// }
])


export default MainRouter;

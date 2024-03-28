import { Navigate, createBrowserRouter } from "react-router-dom";

import { Layout } from "src/shared/ui/Layout";

import { ProfilePage } from "src/pages/Profile/ui/ProfilePage";


const MainRouter = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: '',
				element: <Navigate to={'auth'} />,
				index: true,
			},
			{
				path: 'auth',
				element: <div>hello, this is auth page</div>
			},
      		{
				path: "main/feed",
        		element: <h1>Hello</h1>,
			},
			{
				path: "main/profile",
				element: <ProfilePage />,
			}
		]
	},
])


export default MainRouter;

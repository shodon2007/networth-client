import {Navigate} from "react-router-dom";
import {FindUsers} from "src/widgets/Friends/FindUsers";
import {FriendRequests} from "src/widgets/Friends/FriendRequests";
import {MyFriends} from "src/widgets/Friends/MyFriends";

const friendRoutes = [
	{
		path: "",
		element: <MyFriends />,
	},
	{
		path: "/requests",
		element: <FriendRequests />,
	},
	{
		path: "/findUsers",
		element: <FindUsers />,
	},
	{
		path: "*",
		element: <Navigate to={""} />,
	},
];

export {friendRoutes};

import {Navigate} from "react-router-dom";
import {FriendRequests} from "src/widgets/Friends/FriendRequests";
import {MyFriends} from "src/widgets/Friends/MyFriends";
import {SearchUsers} from "src/widgets/Friends/SearchUsers";

const friendRoutes = [
	{
		path: "",
		title: "My Friends",
		element: <MyFriends />,
	},
	{
		path: "requests",
		title: "Requests",
		element: <FriendRequests />,
	},
	{
		path: "searchUsers",
		title: "Search Users",
		element: <SearchUsers />,
	},
	{
		path: "*",
		element: <Navigate to={""} />,
	},
];

export {friendRoutes};

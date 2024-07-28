import {ReactNode} from "react";
import {Navigate} from "react-router-dom";
import {FriendRequests} from "src/widgets/Friends/FriendRequests";
import {MyFriends} from "src/widgets/Friends/MyFriends";
import {SearchUsers} from "src/widgets/Friends/SearchUsers";

interface FriendRoutes {
	path: string;
	title?: string;
	element: ReactNode;
}

const friendRoutes: FriendRoutes[] = [
	{
		path: "",
		title: "friends.navbarMyFriendsPage",
		element: <MyFriends />,
	},
	{
		path: "requests",
		title: "friends.navbarRequestsPage",
		element: <FriendRequests />,
	},
	{
		path: "searchUsers",
		title: "friends.navbarSearchPage",
		element: <SearchUsers />,
	},
	{
		path: "*",
		element: <Navigate to={""} />,
	},
];

export {friendRoutes};

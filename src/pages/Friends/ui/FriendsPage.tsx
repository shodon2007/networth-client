import cls from "./FriendsPage.module.scss";
import {FriendRoutes} from "src/widgets/Friends/FriendRoutes";
import {FriendsNavbar} from "src/widgets/Friends/FriendsNavbar";

const FriendsPage = () => {
	return (
		<div className={cls.friendsPage}>
			<FriendRoutes />
			<FriendsNavbar />
		</div>
	);
};

export default FriendsPage;

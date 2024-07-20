import cls from "./FriendsPage.module.scss";
import {FriendRoutes} from "src/widgets/Friends/FriendRoutes";
import {FriendsNavbar} from "src/widgets/Friends/FriendsNavbar";

const FriendsPage = () => {
	return (
		<div className={cls.friendsPage}>
			<FriendRoutes />
			<div className={cls.navbarWrapper}>
				<FriendsNavbar />
			</div>
		</div>
	);
};

export default FriendsPage;

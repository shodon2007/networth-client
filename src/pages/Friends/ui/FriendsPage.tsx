import {FriendRoutes} from "src/widgets/Friends/FriendRoutes";
import {FriendsNavbar} from "src/widgets/Friends/FriendsNavbar";
import cls from "./FriendsPage.module.scss";

const FriendsPage = () => {
	return (
		<div className={cls.friendsPage} data-testid="friends-page">
			<div className={cls.friendsRoute}>
				<FriendRoutes />
			</div>
			<div className={cls.navbarWrapper}>
				<FriendsNavbar />
			</div>
		</div>
	);
};

export default FriendsPage;

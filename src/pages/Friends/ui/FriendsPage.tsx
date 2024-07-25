import classNames from "src/shared/lib/classNames";
import cls from "./FriendsPage.module.scss";
import {FriendRoutes} from "src/widgets/Friends/FriendRoutes";
import {FriendsNavbar} from "src/widgets/Friends/FriendsNavbar";

const FriendsPage = () => {
	return (
		<>
			<div className={cls.friendsPage}>
				<div className={cls.friendsRoute}>
					<FriendRoutes />
				</div>
				<div className={cls.navbarWrapper}>
					<FriendsNavbar />
				</div>
			</div>
		</>
	);
};

export default FriendsPage;

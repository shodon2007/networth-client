import cls from "./ProfilePage.module.scss";
import {UserDataCard} from "src/widgets/Profile/UserDataCard";

export const ProfilePage = () => {
	return (
		<div className={cls.Profile}>
			<UserDataCard />
			{/* <FriendsListCard /> */}
			{/* <AlbumSectionCard /> */}
			{/* <ChannelsListCard /> */}
			{/* <CreatePostCard /> */}
			{/* <SpecializedCard /> */}
		</div>
	);
};

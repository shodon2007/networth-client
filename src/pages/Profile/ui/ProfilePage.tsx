import {UserDataCard} from "src/widgets/Profile/UserDataCard";

import cls from "./ProfilePage.module.scss";

const ProfilePage = () => {
	return (
		<div className={cls.profile} data-testid="profile-page">
			<UserDataCard />
			{/* <FriendsListCard /> */}
			{/* <AlbumSectionCard /> */}
			{/* <ChannelsListCard /> */}
			{/* <CreatePostCard /> */}
			{/* <SpecializedCard /> */}
		</div>
	);
};
export default ProfilePage;

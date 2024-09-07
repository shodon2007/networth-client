import {UserDataCard} from "src/widgets/Profile/UserDataCard";

import {FriendsListCard} from "src/widgets/Profile/FriendsListCard";
import {AlbumSectionCard} from "src/widgets/Profile/AlbumSectionCard";
import {ChannelsListCard} from "src/widgets/Profile/ChannelsListCard";
import {CreatePostCard} from "src/widgets/Profile/CreatePostCard";
import {SpecializedCard} from "src/widgets/Profile/SpecializedCard";
import cls from "./ProfilePage.module.scss";

const ProfilePage = () => {
	return (
		<div className={cls.profile} data-testid="profile-page">
			<div className={cls.leftColumns}>
				<UserDataCard />
				<AlbumSectionCard />
				<CreatePostCard />
			</div>
			<div className={cls.rightColumns}>
				<FriendsListCard />
				<ChannelsListCard />
				<SpecializedCard />
			</div>
		</div>
	);
};
export default ProfilePage;

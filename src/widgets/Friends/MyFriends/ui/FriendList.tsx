import {ComponentType, FC} from "react";
import AutoSizer from "react-virtualized-auto-sizer";

import {FixedSizeList, ListChildComponentProps} from "react-window";
import globalEnv from "src/shared/config/global-variables";
import {UserInfoTypes} from "src/shared/types/user/userInfoTypes";
import FriendItem from "./FriendItem";
import {useTranslation} from "react-i18next";

interface FriendListProps {
	data: UserInfoTypes[];
}

const FriendList: FC<FriendListProps> = ({data}) => {
	const {t} = useTranslation();
	if (data.length === 0) {
		return t("friends.friendsPageEmpty");
	}

	const Row: ComponentType<ListChildComponentProps> = ({index, style}) => {
		const user = data[index];

		const isAvatarNotUrl =
			user.avatar && !user.avatar.includes(globalEnv.API_URL);
		const isNotAvatar = !user.avatar;
		if (isAvatarNotUrl || isNotAvatar) {
			user.avatar = `${globalEnv.API_URL}/api/file/avatar/${user.avatar ?? "default.png"}`;
		}

		return <FriendItem style={style} user={user} />;
	};

	return (
		<AutoSizer>
			{({width, height}: {width: number; height: number}) => {
				return (
					<FixedSizeList
						height={height}
						width={width}
						itemSize={120}
						itemCount={data.length}
					>
						{Row}
					</FixedSizeList>
				);
			}}
		</AutoSizer>
	);
};

export default FriendList;

import {CSSProperties, FC, useState} from "react";
import {UserInfoTypes} from "src/shared/types/user/userInfoTypes";
import cls from "./MyFriends.module.scss";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import MoreIcon from "src/shared/assets/MoreIcon.svg?react";
import Button from "src/shared/ui/Button/Button";
import useDeleteFriend from "src/entities/friends/hooks/useDeleteFriend";
import {useTranslation} from "react-i18next";

interface FriendItemProps {
	style: CSSProperties;
	user: UserInfoTypes;
}

const FriendItem: FC<FriendItemProps> = ({style, user}) => {
	const {t} = useTranslation();
	const [isUserDelete, setIsUserDelete] = useState(false);

	const deleteFriendFn = useDeleteFriend(() => setIsUserDelete(true)).mutate;

	return (
		<div
			style={style}
			className={cls.userWrapper}
			data-testid={`friends-myfriends-item-${user.id}`}
		>
			<div className={cls.userItem}>
				<div className={cls.userLeft}>
					<img src={user.avatar} className={cls.userAvatar} />
					<span
						className={cls.userTitle}
					>{`${user.name} ${user.surname}`}</span>
				</div>
				<div className={cls.userRight}>
					{isUserDelete ? (
						<div>{t("friends.friendsPageDeletedText")}</div>
					) : (
						<Menu>
							<MenuButton className={cls.moreMenuButton}>
								<Button
									className={cls.moreButton}
									data-testid={"friends-myfriends-dropdown"}
								>
									<MoreIcon className={cls.moreIcon} />
								</Button>
							</MenuButton>
							<MenuItems anchor="bottom" className={cls.moreMenuItems}>
								<MenuItem>
									<Button theme="clear">
										{t("friends.friendsPageToProfileLink")}
									</Button>
								</MenuItem>
								<MenuItem>
									<Button theme="clear">
										{t("friends.friendsPageWriteMessage")}
									</Button>
								</MenuItem>
								<MenuItem>
									<Button
										data-testid="friends-myfriends-deleteFriend-button"
										theme="red"
										onClick={() => deleteFriendFn(+user.id)}
									>
										{t("friends.friendsPageDeleteFriend")}
									</Button>
								</MenuItem>
							</MenuItems>
						</Menu>
					)}
				</div>
			</div>
		</div>
	);
};

export default FriendItem;

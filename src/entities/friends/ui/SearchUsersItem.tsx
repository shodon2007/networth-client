import {CSSProperties, FC, memo, useState} from "react";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";
import Button from "src/shared/ui/Button/Button";
import {UserInfoTypes} from "src/shared/types/user/userInfoTypes";
import {rejectFriendRequest, sendFriendRequest} from "../api/friendsApi";
import cls from "./SearchUsersItem.module.scss";

interface SearchUsersItemProps {
	style: CSSProperties;
	user: UserInfoTypes;
}

const SearchUsersItem: FC<SearchUsersItemProps> = memo(({style, user}) => {
	const [isButtonActive, setIsButtonActive] = useState(true);
	const {t} = useTranslation();

	const sendSearchButtonClick = async (userId: number) => {
		const resp = await sendFriendRequest(userId);
		if (resp.data === true) {
			setIsButtonActive(false);
			toast.success(resp.message);
			return true;
		}
		toast.error(resp.message);
	};

	const cancelSearchButtonClick = async (userId: number) => {
		const resp = await rejectFriendRequest(userId);
		if (resp.data === true) {
			setIsButtonActive(true);
			toast.success(resp.message);
			return true;
		}
		toast.error(resp.message);
	};

	return (
		<div
			style={style}
			className={cls.userItemWrapper}
			data-testid={`search-users-item-${user.id}`}
		>
			<div className={cls.userItem}>
				<div className={cls.userLeft}>
					<img src={user.avatar} className={cls.userAvatar} />
					<div className={cls.userInfo}>
						<span className={cls.userName}>
							{`${user.name} ${user.surname}`}
						</span>
						<span className={cls.userEmail}>{user.email}</span>
					</div>
				</div>
				<div className={cls.userRight}>
					{isButtonActive ? (
						<Button
							className={cls.sendRequestButton}
							data-testid={"search-users-sendRequest-button"}
							onClick={() => sendSearchButtonClick(+user.id)}
						>
							{t("friends.searchPageSendRequest")}
						</Button>
					) : (
						<Button
							className={cls.sendRequestButton}
							onClick={() => cancelSearchButtonClick(+user.id)}
						>
							{t("friends.searchPageCancelSendRequest")}
						</Button>
					)}
				</div>
			</div>
		</div>
	);
});

export default SearchUsersItem;

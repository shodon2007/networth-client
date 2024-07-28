import {ComponentType, CSSProperties, FC, useState} from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import {FixedSizeList, ListChildComponentProps} from "react-window";
import {
	useGetFriendRequestList,
	useRejectFriendRequest,
	useSendFriendRequestList,
} from "src/entities/friends";
import globalEnv from "src/shared/config/global-variables";
import {UserInfoTypes} from "src/shared/types/user/userInfoTypes";
import cls from "./FriendRequests.module.scss";
import Button from "src/shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

const GetFriendRequestList = () => {
	const {data, isFetching} = useSendFriendRequestList();

	if (isFetching) {
		return "loading";
	}

	if (data.length === 0) {
		return "Empty";
	}

	const Row: ComponentType<ListChildComponentProps> = ({index, style}) => {
		const user = data[index];

		const isAvatarNotUrl =
			user.avatar && !user.avatar.includes(globalEnv.API_URL);
		const isNotAvatar = !user.avatar;
		if (isAvatarNotUrl || isNotAvatar) {
			user.avatar = `${globalEnv.API_URL}/api/file/avatar/${user.avatar ?? "default.png"}`;
		}

		return <GetFriendRequestItem style={style} user={user} />;
	};

	return (
		<div className={cls.userList}>
			<AutoSizer>
				{({width, height}: {width: number; height: number}) => {
					return (
						<FixedSizeList
							height={height}
							width={width}
							itemSize={150}
							itemCount={data.length}
						>
							{Row}
						</FixedSizeList>
					);
				}}
			</AutoSizer>
		</div>
	);
};

interface GetFriendRequestItemProps {
	style: CSSProperties;
	user: UserInfoTypes;
}

const GetFriendRequestItem: FC<GetFriendRequestItemProps> = ({style, user}) => {
	const {t} = useTranslation();
	const rejectFn = useRejectFriendRequest(() => setFriendStatus(true));
	const [friendStatus, setFriendStatus] = useState(false);

	return (
		<div
			style={style}
			className={cls.userItemWrapper}
			data-testid={`friends-requests-sended-item-${user.id}`}
		>
			<div className={cls.userItem}>
				<div className={cls.userLeft}>
					<div className={cls.userLeftLeft}>
						<img src={user.avatar} className={cls.userAvatar} />
					</div>
					<div className={cls.userLeftRight}>
						<span>{`${user.name} ${user.surname}`}</span>
						<span>{user.email}</span>
					</div>
				</div>
				<div className={cls.userRight}>
					{!friendStatus ? (
						<>
							<Button
								className={cls.userItemBtn}
								onClick={() => rejectFn.mutate(+user.id)}
							>
								{t("friends.requestPageCancel")}
							</Button>
						</>
					) : (
						<div style={{alignItems: "center"}}>
							{t("friends.requestPageCanceled")}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default GetFriendRequestList;

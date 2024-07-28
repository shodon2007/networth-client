import {ComponentType, CSSProperties, FC, useState} from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import {FixedSizeList, ListChildComponentProps} from "react-window";
import {
	useGetFriendRequestList,
	useRejectFriendRequest,
} from "src/entities/friends";
import globalEnv from "src/shared/config/global-variables";
import {UserInfoTypes} from "src/shared/types/user/userInfoTypes";
import cls from "./FriendRequests.module.scss";
import Button from "src/shared/ui/Button/Button";
import {useAcceptFriendRequest} from "src/entities/friends/hooks/useAcceptFriendRequest";
import {useTranslation} from "react-i18next";

const GetFriendRequestList = () => {
	const {data, isFetching} = useGetFriendRequestList();
	const {t} = useTranslation();

	if (isFetching) {
		return t("friends.requestPageLoading");
	}

	if (data.length === 0) {
		return t("friends.requestPageEmpty");
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
	type friendStatusType = "wait" | "accept" | "reject";

	const {t} = useTranslation();
	const acceptFn = useAcceptFriendRequest(() => setFriendStatus("accept"));
	const rejectFn = useRejectFriendRequest(() => setFriendStatus("reject"));
	const [friendStatus, setFriendStatus] = useState<friendStatusType>("wait");

	return (
		<div
			style={style}
			className={cls.userItemWrapper}
			data-testid={`friends-requests-received-item-${user.id}`}
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
					{friendStatus === "wait" ? (
						<>
							<Button
								className={cls.userItemBtn}
								theme="active"
								data-testid="friends-requests-received-accept-button"
								onClick={() => acceptFn.mutate(+user.id)}
							>
								{t("friends.requestPageAccept")}
							</Button>
							<Button
								className={cls.userItemBtn}
								onClick={() => rejectFn.mutate(+user.id)}
							>
								{t("friends.requestPageReject")}
							</Button>
						</>
					) : (
						<div style={{alignItems: "center"}}>
							{friendStatus === "accept"
								? t("friends.requestPageAccepted")
								: t("friends.requestPageRejected")}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default GetFriendRequestList;

import {ComponentType, memo} from "react";
import {
	FixedSizeList,
	FixedSizeListProps,
	ListChildComponentProps,
} from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";
import {UserInfoTypes} from "src/shared/types/user/userInfoTypes";
import cls from "./SearchBlock.module.scss";
import Button from "src/shared/ui/Button/Button";
import globalEnv from "src/shared/config/global-variables";
interface UserListProps {
	data: UserInfoTypes[];
	isFetching: boolean;
}
const UserList = memo(({data, isFetching}: UserListProps) => {
	if (isFetching) {
		return "loading...";
	}
	if (!data || data.length === 0) {
		return <div>Empty</div>;
	}

	const Row: ComponentType<ListChildComponentProps> = ({index, style}) => {
		const user = data[index];

		const isAvatarNotUrl =
			user.avatar && !user.avatar.includes(globalEnv.API_URL);
		const isNotAvatar = !user.avatar;
		if (isAvatarNotUrl || isNotAvatar) {
			user.avatar = `${globalEnv.API_URL}/api/file/avatar/${user.avatar ?? "default.png"}`;
		}
		return (
			<div style={style} className={cls.userItemWrapper}>
				<div className={cls.userItem}>
					<div className={cls.userLeft}>
						<img src={user.avatar} className={cls.userAvatar} />
						<span>{`${user.name} ${user.surname}`}</span>
					</div>
					<div className={cls.userRight}>
						<Button className={cls.sendRequestButton}>Отправить запрос</Button>
					</div>
				</div>
			</div>
		);
	};

	const loadMoreItems = (start: number, end: number) => {
		return;
	};

	return (
		<div className={cls.userList}>
			<AutoSizer>
				{({width, height}: {width: number; height: number}) => {
					return (
						<InfiniteLoader
							isItemLoaded={(index) => {
								return !!data[index];
							}}
							itemCount={data.length}
							loadMoreItems={loadMoreItems}
						>
							{({onItemsRendered, ref}) => (
								<FixedSizeList
									height={height}
									itemCount={data.length}
									itemSize={120}
									width={width}
									onItemsRendered={onItemsRendered}
									ref={ref}
								>
									{Row}
								</FixedSizeList>
							)}
						</InfiniteLoader>
					);
				}}
			</AutoSizer>
		</div>
	);
});

export default UserList;

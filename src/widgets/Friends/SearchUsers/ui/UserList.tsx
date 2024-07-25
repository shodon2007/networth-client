import {ComponentType, memo, useEffect, useState} from "react";
import {FixedSizeList, ListChildComponentProps} from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";
import {UserInfoTypes} from "src/shared/types/user/userInfoTypes";
import cls from "./SearchUsers.module.scss";
import Button from "src/shared/ui/Button/Button";
import globalEnv from "src/shared/config/global-variables";
import {
	FetchNextPageOptions,
	InfiniteData,
	InfiniteQueryObserverResult,
} from "@tanstack/react-query";
interface UserListProps {
	data?: InfiniteData<UserInfoTypes[]>;
	fetchNextPage: (
		options?: FetchNextPageOptions,
	) => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>>;
}
const UserList = memo(({data, fetchNextPage}: UserListProps) => {
	if (!data || data.pages.length === 0) {
		return <div>Empty</div>;
	}

	const getPageLength = () =>
		data.pages.reduce((acc, el) => {
			acc += el.length;
			return acc;
		}, 0);

	const Row: ComponentType<ListChildComponentProps> = ({index, style}) => {
		let user: UserInfoTypes | null = null;
		if (index < 20) {
			user = data.pages[0][index];
		} else {
			user = data.pages[Math.floor((index - 10) / 10)][index % 10];
		}
		const df = data.pages[0][0];
		// const user = userList[index];
		if (!user) {
			return null;
		}

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
		if (end >= getPageLength() - 1) {
			const res = fetchNextPage();
			return res as unknown as Promise<void>;
		}
	};

	return (
		<div className={cls.userList}>
			<AutoSizer>
				{({width, height}: {width: number; height: number}) => {
					return (
						<InfiniteLoader
							isItemLoaded={(index) => {
								if (index === getPageLength() - 1) {
									return false;
								}
								return true;
							}}
							itemCount={getPageLength()}
							loadMoreItems={loadMoreItems}
						>
							{({onItemsRendered, ref}) => (
								<FixedSizeList
									height={height}
									itemCount={getPageLength()}
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

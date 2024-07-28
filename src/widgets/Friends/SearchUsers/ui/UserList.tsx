import {ComponentType, memo} from "react";
import {FixedSizeList, ListChildComponentProps} from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";
import {
	FetchNextPageOptions,
	InfiniteData,
	InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import {useTranslation} from "react-i18next";
import {UserInfoTypes} from "src/shared/types/user/userInfoTypes";
import globalEnv from "src/shared/config/global-variables";
import {SearchUsersItem} from "src/entities/friends";
import cls from "./SearchUsers.module.scss";
interface UserListProps {
	data?: InfiniteData<UserInfoTypes[]>;
	fetchNextPage: (
		options?: FetchNextPageOptions,
	) => Promise<
		InfiniteQueryObserverResult<InfiniteData<unknown, unknown>, Error>
	>;
}
const UserList = memo(({data, fetchNextPage}: UserListProps) => {
	const {t} = useTranslation();
	if (!data || data.pages.length === 0) {
		return <div>{t("friends.searchPageEmpty")}</div>;
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
			user = data.pages[Math.floor(index / 20)][index % 20];
		}
		if (!user) {
			return null;
		}

		const isAvatarNotUrl =
			user.avatar && !user.avatar.includes(globalEnv.API_URL);
		const isNotAvatar = !user.avatar;
		if (isAvatarNotUrl || isNotAvatar) {
			user.avatar = `${globalEnv.API_URL}/api/file/avatar/${user.avatar ?? "default.png"}`;
		}

		return <SearchUsersItem style={style} user={user} />;
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

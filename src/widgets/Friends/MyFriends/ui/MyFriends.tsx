import {useState} from "react";
import {FriendSearches, useGetFriends} from "src/entities/friends";
import Block from "src/shared/ui/Block/Block";
import FriendList from "./FriendList";
import cls from "./MyFriends.module.scss";
import {useTranslation} from "react-i18next";

const MyFriends = () => {
	const [searchText, setSearchText] = useState("");
	const {data, isFetching} = useGetFriends(searchText);
	const {t} = useTranslation();
	return (
		<Block className={cls.page} data-testid="friends-myfriends-page">
			<FriendSearches
				onSubmit={(text) => setSearchText(text)}
				placeholder={t("friends.searchFriends")}
			/>
			{isFetching ? (
				<div>{t("friends.myFriendsLoading")}</div>
			) : (
				<FriendList data={data} />
			)}
		</Block>
	);
};

export default MyFriends;

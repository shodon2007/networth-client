import {memo, useCallback, useState} from "react";
import {useFindUsers} from "src/entities/friends";
import Block from "src/shared/ui/Block/Block";
import UserList from "./UserList";
import SearchBlock from "./SearchBlock";
import cls from "./SearchBlock.module.scss";

const FindUsers = memo(() => {
	const [searchText, setSearchText] = useState("");
	const {refetch, data, isFetching} = useFindUsers(searchText);

	const onSubmit = useCallback((value: string) => {
		console.log(value);
		setSearchText(() => value);
	}, []);

	return (
		<Block className={cls.searchPage}>
			<SearchBlock onSubmit={onSubmit} />
			<UserList data={data} isFetching={isFetching} />
		</Block>
	);
});

export default FindUsers;

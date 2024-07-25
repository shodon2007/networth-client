import {memo, useCallback, useState} from "react";
import {useFindUsers} from "src/entities/friends";
import Block from "src/shared/ui/Block/Block";
import UserList from "./UserList";
import SearchBlock from "./SearchInput";
import cls from "./SearchUsers.module.scss";
import classNames from "src/shared/lib/classNames";

const SearchUsers = memo(() => {
	const [searchText, setSearchText] = useState("");
	const {data, fetchNextPage} = useFindUsers(searchText);

	const onSubmit = useCallback((value: string) => {
		setSearchText(() => value);
	}, []);

	return (
		<Block className={classNames(cls.searchPage)}>
			<SearchBlock onSubmit={onSubmit} />
			<UserList data={data} fetchNextPage={fetchNextPage} />
		</Block>
	);
});

export default SearchUsers;

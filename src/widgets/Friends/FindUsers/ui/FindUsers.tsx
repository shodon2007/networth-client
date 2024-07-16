import {useState} from "react";
import {FriendSearches, useFindUsers} from "src/entities/friends";
import Block from "src/shared/ui/Block/Block";
import UserList from "./UserList";

const FindUsers = () => {
	const [value, setValue] = useState("");
	const {refetch, data, isFetching} = useFindUsers(value);

	return (
		<Block>
			<FriendSearches
				placeholder="Search users"
				setValue={setValue}
				value={value}
				onSubmit={() => refetch()}
			/>
			<UserList data={data} isFetching={isFetching} />
		</Block>
	);
};

export default FindUsers;

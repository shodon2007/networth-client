import {memo} from "react";
import {UserInfoTypes} from "src/shared/types/user/userInfoTypes";

interface UserListProps {
	data: UserInfoTypes[];
	isFetching: boolean;
}

const UserList = memo(({data, isFetching}: UserListProps) => {
	if (isFetching) {
		return "loading...";
	}
	if (data.length === 0) {
		return <div>Empty</div>;
	}
	return (
		<div>
			{data.map((el) => {
				return (
					<div key={el.id}>
						name: {el.name}
						email: {el.surname}
					</div>
				);
			})}
		</div>
	);
});

export default UserList;

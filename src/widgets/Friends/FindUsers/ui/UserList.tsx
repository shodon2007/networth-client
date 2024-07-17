import {memo} from "react";
import {UserInfoTypes} from "src/shared/types/user/userInfoTypes";
import cls from "./SearchBlock.module.scss";
import Button from "src/shared/ui/Button/Button";

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
		<div className={cls.userList}>
			{data.map((el) => {
				el.avatar =
					el.avatar ?? "https://networth.shodon.ru/api/file/avatar/default.png";
				return (
					<div key={el.id} className={cls.userItem}>
						<img src={el.avatar} className={cls.userAvatar} />
						<div className={cls.userBottom}>
							<span>{`${el.name} ${el.surname}`}</span>
							<Button className={cls.sendRequestButton}>
								Отправить запрос
							</Button>
						</div>
					</div>
				);
			})}
		</div>
	);
});

export default UserList;

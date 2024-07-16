import {Dispatch, FC, SetStateAction, useState} from "react";
import cls from "./FriendSearches.module.scss";
import SearchIcon from "src/shared/assets/magnifier.svg?react";

interface FriendSEarchesProps {
	placeholder: string;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	onSubmit: () => void;
}

const FriendSearches: FC<FriendSEarchesProps> = ({
	placeholder,
	value,
	setValue,
	onSubmit,
}) => {
	return (
		<form className={cls.searchBar}>
			<input
				className={cls.searchInput}
				placeholder={placeholder}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button
				type="submit"
				className={cls.searchButton}
				onClick={(e) => {
					e.preventDefault();
					onSubmit();
				}}
			>
				<SearchIcon />
			</button>
		</form>
	);
};

export default FriendSearches;

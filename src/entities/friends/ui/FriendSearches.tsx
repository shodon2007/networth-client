import {FC, memo, useState} from "react";
import SearchIcon from "src/shared/assets/magnifier.svg?react";
import cls from "./FriendSearches.module.scss";

interface FriendSEarchesProps {
	placeholder: string;
	onSubmit: (value: string) => void;
}

const FriendSearches: FC<FriendSEarchesProps> = memo(
	({placeholder, onSubmit}) => {
		const [value, setValue] = useState("");

		return (
			<form className={cls.searchBar}>
				<input
					className={cls.searchInput}
					placeholder={placeholder}
					data-testid="search-users-input"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button
					type="submit"
					data-testid="search-users-button"
					className={cls.searchButton}
					onClick={(e) => {
						e.preventDefault();
						onSubmit(value);
					}}
				>
					<SearchIcon />
				</button>
			</form>
		);
	},
);

export default FriendSearches;

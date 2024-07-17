import {FC, memo, useState} from "react";
import {FriendSearches} from "src/entities/friends";

interface SearchBlockProps {
	onSubmit: (arg1: string) => void;
}

const SearchBlock: FC<SearchBlockProps> = memo(({onSubmit}) => {
	const [value, setValue] = useState("");
	console.log("rerender searchblock");
	return (
		<FriendSearches
			placeholder="Search users"
			setValue={setValue}
			value={value}
			onSubmit={() => onSubmit(value)}
		/>
	);
});

export default SearchBlock;

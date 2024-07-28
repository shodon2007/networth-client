import {FC, memo, useState} from "react";
import {useTranslation} from "react-i18next";
import {FriendSearches} from "src/entities/friends";

interface SearchBlockProps {
	onSubmit: (arg1: string) => void;
}

const SearchBlock: FC<SearchBlockProps> = memo(({onSubmit}) => {
	const {t} = useTranslation();
	return (
		<FriendSearches
			placeholder={t("friends.searchUsers")}
			onSubmit={(value) => onSubmit(value)}
		/>
	);
});

export default SearchBlock;

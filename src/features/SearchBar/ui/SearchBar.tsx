import {useTranslation} from "react-i18next";
import MagnifierIcon from "src/shared/assets/magnifier.svg";

import cls from "./SearchBar.module.scss";

const SearchBar = () => {
	const {t} = useTranslation();

	return (
		<div className={cls.stroke}>
			<div className={cls.strokeBg}>
				<img src={MagnifierIcon} alt="icon" className={cls.searchBarIcon} />
				<input className={cls.searchBar} placeholder={t("search.find")} />
			</div>
		</div>
	);
};

export default SearchBar;

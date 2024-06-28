import {useTranslation} from "react-i18next";
import MagnifierIcon from "src/shared/assets/magnifier.svg";

import cls from "./SearchChat.module.scss";

const SearchChat = () => {
	const {t} = useTranslation();

	return (
		<div className={cls.stroke}>
			<div className={cls.strokeBg}>
				<img src={MagnifierIcon} alt="icon" className={cls.searchBarIcon} />
				<input className={cls.searchBar} placeholder={t("messanger.findChat")} />
			</div>
		</div>
	);
};

export default SearchChat;

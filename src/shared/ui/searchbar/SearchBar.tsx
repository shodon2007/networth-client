import { useTranslation } from "react-i18next";
import MagnifierIcon from "src/shared/assets/magnifier.svg";

import cls from "./SearchBar.module.scss";

interface SearchBarProps {
  children: string;
}

export const SearchBar = ({ children, ...props }: SearchBarProps) => {
	const { t } = useTranslation();

	return (
		<div className={cls.stroke}>
			<div className={cls.strokeBg}>
				<img src={MagnifierIcon} alt="icon" className={cls.searchBarIcon} />
				{/* 
          I created the translation right in this component,
          because it will be look cleaner, cause it will be 
          needed the only write a children(string) and write the
          translation in one place.
        */}
				<input
					className={cls.searchBar}
					placeholder={t(`search.${children}`)}
					{...props}
				/>
			</div>
		</div>
	);
};

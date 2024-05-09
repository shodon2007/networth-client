import {useTranslation} from "react-i18next";
import cls from "./SearchBar.module.scss";
import MagnifierIcon from "src/shared/assets/magnifier.svg";

interface SearchBarProps {
	children: string;
}

export const SearchBar = ({children, ...props}: SearchBarProps) => {
	const {t} = useTranslation();

	return (
		<div className={cls.Stroke}>
			<div className={cls.Stroke__BG}>
				<img src={MagnifierIcon} alt="icon" className={cls.SearchBar__icon} />
				{/* 
          I created the translation right in this component,
          because it will be look cleaner, cause it will be 
          needed the only write a children(string) and write the
          translation in one place.
        */}
				<input
					className={cls.SearchBar}
					placeholder={t(`search.${children}`)}
					{...props}
				/>
			</div>
		</div>
	);
};

import { SearchBar } from "src/shared/ui/searchbar/SearchBar";
import cls from "./Header.module.scss";
import NetWorth from 'src/shared/assets/NetWorthLogo.svg'
import magnifier from 'src/shared/assets/magnifier.svg'

interface HeaderProps { }

export const HeaderTemplate = ({ }: HeaderProps) => {
  return (
    <header className={cls.headerStroke}>
      <div className={cls.header}>
        <img src={NetWorth} className={cls.header__Logo} />
        <SearchBar icon={magnifier}>
          Find . . .
        </SearchBar>
      </div>
    </header>
  );
};
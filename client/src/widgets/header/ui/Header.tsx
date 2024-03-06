import { FC } from "react";
import { useTheme } from "src/app/providers/themeProvider";

const Header: FC = () => {
    const {toggleTheme} = useTheme();

    return <div>
        <button onClick={() => toggleTheme()}>theme</button>
        </div>
}

export default Header;
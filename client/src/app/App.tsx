import {FC} from "react";
import {useTheme} from "./providers/themeProvider";
import {AppRouter} from "./providers/router";
import classNames from "src/shared/lib/classNames";

const App: FC = () => {
	const {theme} = useTheme();

	return (
		<div className={classNames("app", {}, [theme])}>
			<AppRouter />
		</div>
	);
};

export default App;

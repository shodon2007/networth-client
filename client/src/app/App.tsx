import {FC} from "react";
import {AppRouter} from "./providers/router";
import classNames from "src/shared/lib/classNames";
import {useTheme} from "src/shared/lib/theme/hooks/useTheme";
import {ToastContainer} from "react-toastify";

const App: FC = () => {
	const {theme} = useTheme();

	return (
		<div className={classNames("app", {}, [theme])}>
			<ToastContainer />
			<AppRouter />
		</div>
	);
};

export default App;

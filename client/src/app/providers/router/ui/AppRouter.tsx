import { RouterProvider } from "react-router-dom";

import MainRouter from "../model/router";
import { themeProvider as Theme } from "src/shared";

const AppRouter = () => {
	return (
		<Theme>
			<RouterProvider router={MainRouter} />
		</Theme>
	);
};

export default AppRouter;
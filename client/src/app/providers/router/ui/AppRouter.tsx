import { RouterProvider } from "react-router-dom";

import MainRouter from "../model/router";
import { themeProvider as Theme } from "src/shared";

const AppRouter = () => {
	return (
			<RouterProvider router={MainRouter} />
	);
};

export default AppRouter;
import { RouterProvider } from "react-router-dom";

import MainRouter from "../model/router";

const AppRouter = () => {
	return (
		<RouterProvider router={MainRouter} />
	);
};

export default AppRouter;
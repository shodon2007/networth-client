import {Routes} from "react-router-dom";

import {Suspense} from "react";
import {renderRoutes, routes} from "../model/router";

const AppRouter = () => {
	return (
		<Suspense fallback={<div>бля.. загрузка</div>}>
			<Routes>{routes && renderRoutes(routes)}</Routes>
		</Suspense>
	);
};

export default AppRouter;

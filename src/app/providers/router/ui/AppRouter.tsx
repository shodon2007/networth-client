import {Suspense} from "react";
import {Routes} from "react-router-dom";
import {routes} from "src/shared/config/routeConfig";
import {renderRoutes} from "../model/renderRouter";

const AppRouter = () => {
	return (
		<Suspense fallback={<div>бля.. загрузка</div>}>
			<Routes>{routes && renderRoutes(routes)}</Routes>
		</Suspense>
	);
};

export default AppRouter;

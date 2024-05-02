import {Routes} from "react-router-dom";

import {publicRoutes, privateRoutes, renderRoutes} from "../model/router";
import {useAppSelector} from "src/shared/lib/store";
import {RootState} from "src/app/providers/storeProvider";
import {Suspense} from "react";

const AppRouter = () => {
	const user = useAppSelector((store: RootState) => store.user.user);

	const routes = user ? privateRoutes : publicRoutes;

	return (
		<Suspense fallback={<div>бля.. загрузка</div>}>
			<Routes>{routes && renderRoutes(routes)}</Routes>
		</Suspense>
	);
};

export default AppRouter;

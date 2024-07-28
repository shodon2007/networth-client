import {memo, Suspense, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {
	globalRoute,
	privateRoutes,
	publicRoutes,
} from "src/shared/config/routeConfig";
import {useUser} from "src/entities/user";
import {renderRoutes} from "../model/renderRouter";

const AppRouter = memo(() => {
	const user = useUser();

	if (user.isUserDataLoading) {
		return <div>Loading</div>;
	}

	return (
		<Suspense fallback={<h1>Loading</h1>}>
			<Routes>
				<Route path={globalRoute.path} element={globalRoute.element}>
					{user.isAuth
						? renderRoutes(privateRoutes)
						: renderRoutes(publicRoutes)}
				</Route>
			</Routes>
		</Suspense>
	);
});

export default AppRouter;

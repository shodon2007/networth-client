import {Suspense, memo} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {
	globalRoute,
	privateRoutes,
	publicRoutes,
	routePath,
} from "src/shared/config/routeConfig";
import {renderRoutes} from "../model/renderRouter";
import {useUser} from "src/entities/user";

const AppRouter = memo(() => {
	const user = useUser();

	if (user.isUserDataLoading) {
		return <div>Loading</div>;
	}

	return (
		<Suspense fallback={<div>бля.. загрузка</div>}>
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

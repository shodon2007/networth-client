import {Route} from "react-router-dom";
import {RouteItem} from "src/shared/config/routeConfig";

const renderRoutes = (routes: RouteItem[]) => {
	return routes.map(({element, path, children}) => (
		<Route key={path} element={element} path={path}>
			{children && <>{renderRoutes(children)}</>}
		</Route>
	));
};

export {renderRoutes};

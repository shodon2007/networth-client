import {Layout} from "src/shared/ui/Layout/Layout";
import {RouteItem} from "./routeConfig";
import routeConfig from "./routeConfig";

const globalRoute: RouteItem = {
	path: routeConfig.routePath.home,
	element: <Layout />,
	index: true,
};

export default globalRoute;

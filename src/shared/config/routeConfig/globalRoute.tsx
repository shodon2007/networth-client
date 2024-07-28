import {Layout} from "src/shared/ui/Layout/Layout";
import routeConfig, {RouteItem} from "./routeConfig";


const globalRoute: RouteItem = {
	path: routeConfig.routePath.home,
	element: <Layout />,
	index: true,
};

export default globalRoute;

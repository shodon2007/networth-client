import {Link, useLocation} from "react-router-dom";
import {routePath} from "src/shared/config/routeConfig";

const NotFoundPage = () => {
	const {pathname} = useLocation();
	return (
		<div data-testid="notFound-page">
			the url {pathname} is not found
			<Link to={routePath.home}>go home</Link>
		</div>
	);
};

export default NotFoundPage;

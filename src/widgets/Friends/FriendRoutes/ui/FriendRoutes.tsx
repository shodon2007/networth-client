import {Route, Routes} from "react-router-dom";
import {friendRoutes} from "src/entities/friends";
const FriendRoutes = () => {
	return (
		<Routes>
			{friendRoutes.map((item) => (
				<Route key={item.path} {...item} />
			))}
		</Routes>
	);
};

export default FriendRoutes;

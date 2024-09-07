import {Route, Routes} from "react-router-dom";
import {friendRoutes} from "src/entities/friends";
const FriendRoutes = () => {
	return (
		<Routes>
			{friendRoutes.map((item) => (
				<Route key={item.path} element={item.element} path={item.path} />
			))}
		</Routes>
	);
};

export default FriendRoutes;

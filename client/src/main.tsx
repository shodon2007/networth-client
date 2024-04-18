import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./app/styles/index.scss";
import {AuthProvider} from "./shared/context/AuthProvider/AuthProvider";
import {StoreProvider} from "./app/providers/storeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<AuthProvider>
		<StoreProvider>
			<App />
		</StoreProvider>
	</AuthProvider>,
);

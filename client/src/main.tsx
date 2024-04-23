import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./app/styles/index.scss";
import {StoreProvider} from "./app/providers/storeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
		<StoreProvider>
			<App />
		</StoreProvider>
);

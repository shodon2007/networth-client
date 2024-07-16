import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import App from "./app/App";
import {StoreProvider} from "./app/providers/storeProvider";

import "./app/styles/index.scss";

import "src/shared/config/i18n/i18n";
import { ToastContainer } from "react-toastify";
// import "src/shared/config/env/init-env";

ReactDOM.createRoot(document.getElementById("root")).render(
	<QueryClientProvider client={new QueryClient()}>
		<StoreProvider>
			<BrowserRouter>
				<ToastContainer />
				<App />
			</BrowserRouter>
		</StoreProvider>
	</QueryClientProvider>,
);

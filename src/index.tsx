import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import ReactDOM from "react-dom/client";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import App from "./app/App";
import {StoreProvider} from "./app/providers/storeProvider";

import "./app/styles/index.scss";

import "src/shared/config/i18n/i18n";
import {ErrorBoundary} from "./pages/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ErrorBoundary>
		<QueryClientProvider client={new QueryClient()}>
			<StoreProvider>
				<BrowserRouter>
					<ToastContainer />
					<App />
				</BrowserRouter>
			</StoreProvider>
		</QueryClientProvider>
	</ErrorBoundary>,
);

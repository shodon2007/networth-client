import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./app/App";
import "./app/styles/index.scss";
import { StoreProvider } from "./app/providers/storeProvider";

import "src/shared/config/i18n/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={new QueryClient()}>
		<StoreProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</StoreProvider>
	</QueryClientProvider>
);

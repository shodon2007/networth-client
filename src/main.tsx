import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client";


import App from "./app/App";
import "./app/styles/index.scss";
import {StoreProvider} from "./app/providers/storeProvider";

import "src/shared/config/i18n/i18n";
import { QueryProvider } from "./app/providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<QueryProvider>
		<StoreProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</StoreProvider>
	</QueryProvider>
);

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import App from "src/app/App";
import {StoreProvider} from "src/app/providers/storeProvider";

export function renderTestApp(initUrl: string) {
	return render(
		<QueryClientProvider client={new QueryClient()}>
			<StoreProvider>
				<MemoryRouter initialEntries={[initUrl]}>
					<App />
				</MemoryRouter>
			</StoreProvider>
		</QueryClientProvider>,
	);
}

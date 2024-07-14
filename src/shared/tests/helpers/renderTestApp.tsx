import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import App from "src/app/App";
import {RootState, StoreProvider} from "src/app/providers/storeProvider";
import {setupStore} from "src/shared/lib/store/config/reducer";

export function renderTestApp(
	initUrl: string,
	preloadedState: Partial<RootState> = {},
) {
	const store = setupStore(preloadedState);

	return render(
		<QueryClientProvider client={new QueryClient()}>
			<MemoryRouter initialEntries={[initUrl]}>
				<Provider store={store}>
					<App />
				</Provider>
			</MemoryRouter>
		</QueryClientProvider>,
	);
}

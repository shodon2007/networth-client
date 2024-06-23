import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {render} from "@testing-library/react";
import {ReactNode} from "react";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import App from "src/app/App";
import {RootState} from "src/app/providers/storeProvider";
import {setupStore} from "src/shared/lib/store/config/reducer";

export function renderWithProviders(
	initialRoute: string = "/",
	preloadedState: Partial<RootState> = {},
	ui: ReactNode = <div></div>,
) {
	const store = setupStore(preloadedState);

	return render(
		<QueryClientProvider client={new QueryClient()}>
			<MemoryRouter initialEntries={[initialRoute]}>
				<Provider store={store}>
					<App />
					{ui}
				</Provider>
			</MemoryRouter>
		</QueryClientProvider>,
	);
}

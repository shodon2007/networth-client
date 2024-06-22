import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {render} from "@testing-library/react";
import {ReactNode} from "react";
import {MemoryRouter} from "react-router-dom";
import App from "src/app/App";
import {StoreProvider} from "src/app/providers/storeProvider";

export function renderWithProviders(
	initialRoute: string = "/",
	component: ReactNode = <div></div>,
) {
	return render(
		<QueryClientProvider client={new QueryClient()}>
			<StoreProvider>
				<MemoryRouter initialEntries={[initialRoute]}>
					<App />
					{component}
				</MemoryRouter>
			</StoreProvider>
		</QueryClientProvider>,
	);
}

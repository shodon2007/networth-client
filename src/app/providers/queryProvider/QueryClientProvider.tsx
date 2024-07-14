import { ReactNode} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const client = new QueryClient();

interface QueryClientProviderProps {
	children: ReactNode;
}

export const QueryProvider = ({
	children,
}: QueryClientProviderProps) => {
	return (
		<QueryClientProvider client={client}>
			{children}
		</QueryClientProvider>
	);
};

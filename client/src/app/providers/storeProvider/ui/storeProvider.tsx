import {ReactNode} from "react";
import {Provider} from "react-redux";
import store from "src/shared/lib/Redux/config/storeConfig/store";

interface StoreProviderProps {
	children: ReactNode;
}

export const StoreProvider = (props: StoreProviderProps) => {
	return <Provider store={store}>{props.children}</Provider>;
};
import ReactDOM from "react-dom/client";
import App from "./app/App";
<<<<<<< HEAD
import './app/styles/index.scss';
import { ThemeProvider } from "./app/providers";
import { AuthProvider } from "./app/providers/AuthProvider";
=======
import "./app/styles/index.scss";
import {AuthProvider} from "./shared/context/AuthProvider/AuthProvider";
import {StoreProvider} from "./app/providers/storeProvider";
>>>>>>> 3edd3dcbd76257794762524fa71ec2ed7711621b

ReactDOM.createRoot(document.getElementById("root")!).render(
	<AuthProvider>
		<StoreProvider>
			<App />
		</StoreProvider>
	</AuthProvider>,
);

import ReactDOM from "react-dom/client";
import App from "./app/App";
import './app/styles/index.scss';
import { ThemeProvider } from "./app/providers";
import { AuthProvider } from "./shared/context/AuthProvider/AuthProvider";


ReactDOM.createRoot(document.getElementById("root")!).render(
	<AuthProvider>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</AuthProvider>
);

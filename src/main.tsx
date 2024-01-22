import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./views/App.tsx";
import "./index.css";
import { Provider } from "jotai";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider>
			<App />
		</Provider>
	</StrictMode>,
);

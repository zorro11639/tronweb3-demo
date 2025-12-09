import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@tronweb3/tronwallet-adapter-react-ui/style.css";

createRoot(document.getElementById("root")!).render(<App />);

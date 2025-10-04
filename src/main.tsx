import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider themes={["dark", "light"]} defaultTheme="dark">
      <App />
    </Provider>
  </StrictMode>
);

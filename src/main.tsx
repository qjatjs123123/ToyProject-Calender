import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { GlobalPortal } from "./GlobalPortal.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalPortal.Provider>
        <App />
      </GlobalPortal.Provider>
    </Provider>
  </StrictMode>
);

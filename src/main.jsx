import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CoinContextProvider from "./Context/CoinContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CoinContextProvider>
      <App />
    </CoinContextProvider>
  </StrictMode>
);

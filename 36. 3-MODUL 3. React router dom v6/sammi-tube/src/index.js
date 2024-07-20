import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components";
import { BrowserRouter } from "react-router-dom";
// material UI fonts was imported
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// material UI fonts was imported

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; //react touter domniki yani app.jsdagi routerlar ishlashi uchun app.jsni o'ziham routerga o'ralishi kerak bu ona router
import { Provider } from "react-redux";
import store from "./store";//storeni ichida index.js bo'lgani uchun indexni nomini yozish shart emas react default holatda index.jsni chaqiradi

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                {/* store bilan redux ulangan hissoblanadi rudux ishlashi uchun app.js providerga o'ralgan bo'lishi kerak */}
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

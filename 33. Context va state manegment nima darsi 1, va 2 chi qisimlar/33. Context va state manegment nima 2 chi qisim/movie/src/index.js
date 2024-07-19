import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import Provider from "./context";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
		
        <Provider>
            {/* bu holatda priveder contex papkani ichidagi index.jsdan kelepti bu holat loyihamo context global karopkaga o'ravolinganini bildiradi */}
            <App />
        </Provider>

    </React.StrictMode>
);

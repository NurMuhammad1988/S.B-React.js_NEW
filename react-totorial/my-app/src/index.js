import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// import React from "react"; //kutubhonalar shunday o'z nomi bilan yani faqat react deb yozilib import qiinadi
// import ReactDOM from "react-dom/client"; //bu react jsx faillarini yani browser jsx failni tushunmaydi o'qiyolmaydi bu reactdom kutubhonasi  esa jsx faillarni browser tushunadigan tilga o'girib beradi
// import "./index.css"; //faillar nuqta bilan import qilinadi
// import App from "./App";

// const text = "Hello Nurr";

// const el = (
//     <div>
//         <h1 className="greating">Text: {text}</h1>
//         <input type="text" />
//         <button>Click</button>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     // <React.StrictMode>
//     //     <App />
//     // </React.StrictMode>
//     el //yani bu jsx sintaksik
// ); // yani raectdom root idni oladi va render qilib ichidagi html divni ichidagi jsxni ko'rsatib beradi

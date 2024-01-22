import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// const el =  <h1>hello world</h1>
// console.dir(el);//react yengil bo'ladi yani vanilla JSda yozilgan oddiy h1 dagi textni keraksiz methodlari juda ko'p bo'ladi lekin reactda faqat kerakli besh oltita methodlar bo'ladi holos shu sabab react yani umuman framework va librariylar juda tez ishlaydi yani vazni kamligi hissobiga

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

//qatttiy rejim yani StrictModeni alohida componenetda ishlatish uchun alohida chaqiriladi
// import React, { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";

// const el =  <h1 className="h11">Hello world</h1>
//console.dir(el);//react yengil bo'ladi yani vanilla JSda yozilgan oddiy h1 dagi textni keraksiz methodlari juda ko'p bo'ladi lekin reactda faqat kerakli besh oltita methodlar bo'ladi holos shu sabab react yani umuman framework va librariylar juda tez ishlaydi yani vazni kamligi hissobiga

// const text ="Hello Nur"

// const el=(
//     <div>
//         <h1>Text: {text}</h1>
//         <input type="text" />
//         <button className="button1">Click</button>
//     </div>
// )


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <StrictMode>
//         <App />
//     </StrictMode> //StrictMode alohida chaqirilganda shunday yoziladi yani qattiy rejim faqat kerakli componentga chaqirilganda shunday ishlaydi shunda eski loyihalardagi eski codlar bilan ishlashda hato kelib chiqmaydi
// );


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode> //yani bu reactdagi qattiy rejim hisoblanadi yani eski codlarni ay tib podskazka berib turadi
    // (el)
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components";
// material UI fonts was imported
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// material UI fonts was imported

// import {App} from './components';bunday yozilishini sababi components/app/app bo'lib ketmasligi uchun components papkani o'zida alohida index.js ochilib shu joydan appni huddi objectday import qilib olib kelindi va renderga qo'yildi {yani distruptatsa} sababi endi appdagi har bir component kop ../../.../<bularsiz componentni ichidagi index.jsga olib ishlatiladi

//bu loyihada material UI ishlatildi yani material UI huddi bootstrap yoki tailwind csslarga o'hshaydi faqat bu raect uchun  chiqarilgani uchun material UI doim component yani tayyor component beradi bu degani scc filelariham material UIni serverida bo'ladi yani material UIda classlar berib emas material UI react uchun yozilgan tayyor componentni chaqirib import qilib ishlasa bo'ldi

// 04:20

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

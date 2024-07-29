import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store"; //src/store/index yani bu asosiy index papka ndex.js papkalanio aftmatik taniydi shu sabab ./storni ichidagi index.js fileni import qil deyish shartmas papkani ko'rsatib shundan import qil deyilsa va o'sha papkada index.js file bo'lsa index.js yozilmasaham aftamatik ravishda index.jsni import qiladi//shunda bu holatda srcni ichidagi storeni ichidagi index.jsni import qiliob oldi
import { Provider } from "react-redux"; //npm i react-redux command bilan chaqirildi yani reactni redux bilan ulab beradigan kutubhona yani redux toolkid kutubhonasini ishlatish uchun react-redux kutubhonasi kerak bu react-redux kutubhonasida Provider funksiyasi bor va bu funskiya asosiy root index js failiga chaqirildi va Provider bilan asosiy dastur Apni o'rab olish kerak va provider store qiymatini yani valuesini object sifatida qabul qiladi yani index.js deb emas storeni qabul qiladi store esa aftamatik tarzda ichidagi index,jsni beradi storedagi index.jsda esa redux toolkidni  yani configlar bor
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

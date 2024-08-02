import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../slice/auth";

    // reduxni o'zidaham middleware api so'rovlar jo'natish mumkun  

export default configureStore({
    reducer: {
        auth: AuthReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
 
});
//slice papkani ichidagi auth.jsda yozilgan reducer birinchi store papkaga chaqirilishi kerak storeda esa redux toolkidni configureStore funksiyasi bor bu funksiya reducer funksiyalarni config qilib beradi  bu reduxni qoidasi// bu holatda slice papkani ichidagi auth nameli reducer funksiya yangi AuthReducer nomi bilan chaqirildi va reducerga  yana auth: nomi bilan chaqirish uchun  berib qo'yildi va login.jsx filega useSelectorda statega teng qilib chaqirib qo'yildi
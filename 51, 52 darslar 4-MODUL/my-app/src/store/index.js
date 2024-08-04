import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../slice/auth";

export default configureStore({
    reducer: {
        auth: AuthReducer,
    },
    devTools: process.env.NODE_ENV !== "production",//bu chrome uchun react redusni toolini configi yani statelarni qanday ishlashini ko'rish uchun oson ekan
});
//slice papkani ichidagi auth.jsda yozilgan reducer birinchi store papkaga chaqirilishi kerak storeda esa redux toolkidni configureStore funksiyasi bor bu funksiya reducer funksiyalarni config qilib beradi  bu reduxni qoidasi// bu holatda slice papkani ichidagi auth nameli reducer funksiya yangi AuthReducer nomi bilan chaqirildi va reducerga  yana auth: nomi bilan chaqirish uchun  berib qo'yildi va login.jsx filega useSelectorda statega teng qilib chaqirib qo'yildi reduserni authSlicemas boshqa nom bilan yani AuthReducer deb chaqirilishi ustozni tanlovi lekin aslida authSlic default qilib export qilingani uchun loyiha ichida hohlagan nom bilan chaqilib ishlatilishi mumkun faqat import marshut to'g'ri ko'rsatilgan bo'lsa bo'ldi
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,//serverga so'rov yuborilganda ishleydi//boshlang'ich holati false
    loggedIn: false,//user ro'yhatda bormi yo'qmi dasturga kirganmi kirmaganmi?//boshlang'ich holati false
    user: null,//yani foydalanuvchini malumotlari //boshlang'ich holati null
};//bu boshlang'ich qiymatlar createSlice funksyasi yaratgan authSlice funksiyasida namedan keyin chaqirilgan birinchi name yozlishini sababi bu nami huddi reduser funksiyasi nomiday gap chaqirib ishlatish uchun kerak

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginUserStart : state => {
            state.isLoading = true
        },//user start bo'lganda yoki secces bo'ladi yoki failure bo'ladi shulardan birini chiqarish uchun
        loginUserSucces  : state => {},
        loginUserFailure : state => {},
    }
});

export const {loginUserStart} =  authSlice.actions//yani objectni default qilib export qilish
export default authSlice.reducer
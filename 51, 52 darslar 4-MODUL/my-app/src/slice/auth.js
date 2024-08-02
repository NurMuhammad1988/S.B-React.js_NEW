import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,//serverga so'rov yuborilganda ishleydi//boshlang'ich holati false
    loggedIn: false,//user ro'yhatda bormi yo'qmi dasturga kirganmi kirmaganmi?//boshlang'ich holati false
    user: null,//yani foydalanuvchini malumotlari //boshlang'ich holati null
};//bu boshlang'ich qiymatlar createSlice funksyasi yaratgan authSlice funksiyasida namedan keyin chaqirilgan birinchi name yozlishini sababi bu nami huddi reduser funksiyasi nomiday gap chaqirib ishlatish uchun kerak

export const authSlice = createSlice({

    // createSlice ikkita parametr qabul qiladi birinchisi nomi ikkinchisi boshlang'ich qiymat huddi statelar kabi boshlang'ich qiymat bu holatda tashqarida yozilgan (initialState)

    name: "auth",//nomi
    initialState,//boshlang'ich qiymati
    reducers: {
        //LOGIN

        loginUserStart : state => {//bu state boshlang'ich qiymat yani stateni isloading qiymatini true qildik boshlang'ich qiymati esa false edi
            state.isLoading = true
        },//user start bo'lganda yoki secces bo'ladi yoki failure bo'ladi shulardan birini chiqarish uchun
        loginUserSucces  : state => {},
        loginUserFailure : state => {},

        //REGISTER
        registerUserStart : state => {
            state.isLoading = true
        },//user start bo'lganda yoki secces bo'ladi yoki failure bo'ladi shulardan birini chiqarish uchun
        registerUserSucces  : state => {},
        registerUserFailure : state => {},
    }
});

export const {loginUserStart, registerUserStart} =  authSlice.actions//yani funksiyani objectqilib default export qilish
export default authSlice.reducer
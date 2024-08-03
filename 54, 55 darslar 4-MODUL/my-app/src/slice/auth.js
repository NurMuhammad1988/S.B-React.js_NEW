import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false, //serverga so'rov yuborilganda ishleydi//boshlang'ich holati false
    loggedIn: false, //user ro'yhatda bormi yo'qmi dasturga kirganmi kirmaganmi?//boshlang'ich holati false
    error: null,
    user: null, //yani foydalanuvchini malumotlari //boshlang'ich holati null
}; //bu boshlang'ich qiymatlar createSlice funksyasi yaratgan authSlice funksiyasida namedan keyin chaqirilgan birinchi name yozlishini sababi bu nami huddi reduser funksiyasi nomiday gap chaqirib ishlatish uchun kerak

export const authSlice = createSlice({
    // createSlice ikkita parametr qabul qiladi birinchisi nomi ikkinchisi boshlang'ich qiymat huddi statelar kabi boshlang'ich qiymat bu holatda tashqarida yozilgan (initialState)

    name: "auth", //nomi
    initialState, //boshlang'ich qiymati
    reducers: {


        signUserStart: state => {
            state.isLoading = true;

        },
        signUserSucces: state => {
            state.loggedIn = true;
            state.isLoading = false;
        },
        signUserFailure: state => {
            state.isLoading = false;
            state.error = "errorrr";
        },



        // //LOGIN actions
        // loginUserStart: (state) => {
        //     //bu state boshlang'ich qiymat yani stateni isloading qiymatini true qildik boshlang'ich qiymati esa false edi
        //     state.isLoading = true;
        // }, //user start bo'lganda yoki secces bo'ladi yoki failure bo'ladi shulardan birini chiqarish uchun
        // loginUserSucces: (state) => {
        //     state.loggedIn = true;
        //     state.isLoading = false;
        // },
        // loginUserFailure: (state) => {
        //     state.isLoading = false;
        //     state.error = "errorrr";
        // },
        // //REGISTER actions
        // registerUserStart: (state) => {
        //     state.isLoading = true;
        // }, //user start bo'lganda yoki secces bo'ladi yoki failure bo'ladi shulardan birini chiqarish uchun
        // registerUserSucces: (state) => {
        //     state.loggedIn = true;
        //     state.isLoading = false;
        // },
        // registerUserFailure: (state) => {
        //     state.isLoading = false;
        //     state.error = "errorrr";
        // },
    },
});

export const {
 signUserFailure, signUserStart,signUserSucces
} = authSlice.actions; //yani funksiylarni object qilib default export qilish
export default authSlice.reducer;

//// 12. dars JWT token// yani json web token nima bu jwt saytlarda ro'yhatdan o'tish uchun kerak yani userni malumotlarini saqlab turish uchun kerak
//"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0NzQyMX0sImlhdCI6MTcyMjU1ODIyNCwiZXhwIjoxNzI3NzQyMjI0fQ.rEBQtEc4IgtodfClJv4Yb647Nkl66A7a9Ap2XtGXt70"//birinchi nuqtagacha Header ikkinchi nuqtagcah foydalanuvchi haqida Payload ohirida esa jwtni kalit so'zlari bu jwt har bir user uchun unikal bo'ladi yani hammaniki har hil fronted uchun tokenlar bilan userni malumotlari get qilib olinadi postman ilovasida 12. dars JWT token darsida qilindi

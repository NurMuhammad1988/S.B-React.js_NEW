import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistance-storage";

const initialState = {
    isLoading: false,
    loggedIn: false,
    error: null,
    user: null,
};

export const authSlice = createSlice({
    name: "auth", //nomi
    initialState, //boshlang'ich qiymati
    reducers: {
        // //LOGIN actions REGISTER actions
        signUserStart: (state) => {
            state.isLoading = true;
        },


        signUserSucces: (state, action) => {
            state.loggedIn = true;
            state.isLoading = false;
            state.user = action.payload; //actonni paylodda userni malumotlari keladi
            setItem("token", action.payload.token)//LOGIN VA REGISTERGAHAM BU LOCALSTORAGE FUNKSIYASI ISHLAYDI chunki signUserSucces ikkala componentga unversal qilib berilgan//yani bu setItem pristance-storgae.jsda yozilgan va export qilingan funksiya//yani bu holatda token key qolgani data 
          //userni login qilib loyihaga kirgandagi malumotlarini browserdagi applicationdagi localstoragega joylab qo'yildi //action payloadda serverdan  object keladi//bu holatda "token" key hissoblanadi bu keyni sever taniydi action va payload sabab ro'yhatdan o'tgan userni login qilgandagi serverdan kelgan malumotlaridan token qismini local stroagega ovolish setItemni vazifasi shu//
            //yani token sabab userni tokeni browserda localstrogageda yokida cookieda saqlanadi va user bu loyihaga login qilib kirgandan keyin browser serverdan keladigan tokenni local storagega saqlab bu userni yana keyinham bu loyihaga kirmoqchi bo'lganda shu token sabab tanib kirg'izadi yani email va parolni qaytadan yozib kirishi shart emas ////agar userni tokeni browserni cookie fileda saqlansa userni tokenini qanchadur vaqt belgilab udalit qilib tashlashxam mumkun ynai user login qilib kiradi malum kundan keyin qaytib kiraman desa loyihadan aftamatik tarzda chiqib ketgan bo'ladi qancha vaqtda chiqarvorishni esa dasturchi yozadi 
        },

        signUserFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { signUserFailure, signUserStart, signUserSucces } =
    authSlice.actions;
export default authSlice.reducer;

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
            state.user = action.payload;
            setItem("token", action.payload.token);
        },

        signUserFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        logoutUser: (state) => {
            state.user = null;
            state.loggedIn = false//user logout qilgandan keyingi bu holatlarni reduxdevtoolsda butun jarayonni aniq ko'rish mumkun chromedan skachat qilingan extension
        },//yani logoutUser funksiyasi vazifasi default holatda bu funksiya ishlaganda userni null qilib loggedinni false qiladi yani userni loyihadan chiqarib tashlaydi lekin localstorageda tokeni qoladi shu sabab persistance-srorage.jsda tokenni udalit qiladigan funksiya yozib qo'yilgan yani endi bu logoutUser chaqirili ishlov berilgan navbardagi logouthandler funksiyasi onclick bo'lganda user loyihadan chiqib ketadi
    },
});

export const { signUserFailure, signUserStart, signUserSucces, logoutUser } =
    authSlice.actions;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

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


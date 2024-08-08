import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    articles: [], //yani boshlang'ich qiymatda articles bo'sh array chunki serverdan keladigan massivlarni shu joyga tushurish kerak
    error: null,
};

export const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        getArticlesStart: (state) => {
            state.isLoading = true;
        },
        getArticlesSuccess: (state, action) => {
            state.isLoading = false;
            state.articles = action.payload; //dispatch chaqirilganda parametr buyoqqa tushadi??????
        },

        getArticleFailure: (state, action) => {
            state.error = action.payload; //yani errorham serverdan keladi??????
        },
    },
});

export const { getArticlesStart, getArticlesSuccess, getArticleFailure } =
    articleSlice.actions;

export default articleSlice.reducer;

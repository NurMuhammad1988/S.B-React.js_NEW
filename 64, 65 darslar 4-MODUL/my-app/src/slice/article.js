import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    articles: [], //yani boshlang'ich qiymatda articles bo'sh array chunki serverdan keladigan massivlarni shu joyga tushurish kerak//hammaarticlelar bo'ladi
    articleDetail: null, //bitta articilni malumotilari bo'ladi
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
            state.isLoading = false;
        },

        getArticleDetailStart: (state) => {
            state.isLoading = true;
        },

        getArticleDetailSuccess: (state, action) => {
            state.isLoading = false;
            state.articleDetail = action.payload;
        },
        getArticleDetailFailure: (state) => {
            state.isLoading = false;
        },
    },
});

export const {
    getArticlesStart,
    getArticlesSuccess,
    getArticleFailure,
    getArticleDetailStart,
    getArticleDetailSuccess,
    getArticleDetailFailure,
} = articleSlice.actions;

export default articleSlice.reducer;

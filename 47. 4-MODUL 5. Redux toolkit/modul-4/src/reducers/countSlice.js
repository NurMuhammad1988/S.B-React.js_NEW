// ////33. Context va state manegment darsida  umumiy funskiyalarni componentlar orasida props bilan qayta qayta render bo'lib yurmasli uchun faqat createContex bilan funksiyalarni app,jsxdan olib bitta boxga solib islatgan edi yani hamma funksiya bitta boxda yani contex papka ichidagi index.jsxda edi yani umumiy bitta katta global reducer vazifasini bajaruvchi funksiya  edi lekin  rudex bilan ishlanganda shu katt aglobal reducer vazifasidagi funksiyalarni bo'lish ajratish va ko'plab yozish mumkun>>>>(createSlice) shu sabab state managment uchun rudux qulay hissoblanar ekan

// import { createSlice } from "@reduxjs/toolkit"; //createSlice redux toolkidni metodi vazifasi yangi reducer yaratish

// //createSlice bu agar loyihada reducer funksiyalar ko'p bo'lganda har bir createSlice shunday chaqirilib joriy holatdagidan farqli ravishda countSlicemas boshqa nom bilan chaqirilganda huddi useeffect usestate kabi qayta qayta ishlayveradi bu createSliceni ichida aslida huddi useeffect va usestate kabi funksya yozib qo'yilgan qayerda yozib qo'yilgan redux toolkid kutubhonasida yozib qo'yilgan bu createSlice va ichidagi reducer funksiya nima uchun kerak Context va state manegment uchun kerak?>>> (#33. Context va state manegment darsiga qaralsin) yani funksiyalarni yani umumiy loyihani funksiyalarini app filedan tashqarida yozish va app fileda funksiyalarni componentdan comopnentga props orqali jo'natib loyihani sekin ishlashini oldini olish uchun kerak
// export const countSlice = createSlice({
//     name: "count", //bu papkadagi birinchi createSlice yani reducer funksiyani namesi bu shu countSlice nomli birinchi reducer funksiyani qiymati hissoblanadi ichidagi count esa nomi
//     initialState: { count: 0 }, //bu boshlang'ich qiymat yani boshida 0 ga teng
//     reducers: {
//         plusCounterSlice: (state) => {
//             state.count += 1;
//         },

//         minusCounterSlice: (state) => {
//             state.count -= 1;
//         },

//         resetCounterSlice: (state) => {
//             state.count = 0;
//         },
//     },
// });

// //export qilish
// export const { plusCounterSlice, minusCounterSlice, resetCounterSlice } = countSlice.actions; //actions countSlice nomli createSlice funksiyasini qiymatlari hissoblanadi bu holatda bu qiymatlar plusCounter,minusCounter,resetCounter funksiyalariga teng//action exportga funksiyalar distruptatsa
// export default countSlice.reducer; //reducer export
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
////yuqoridagi darsni commentsiz holati
import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name: "count",
    initialState: { count: 0 },

    reducers: {
        plusCounterSlice: (state) => {
            state.count += 1;
        },

        minusCounterSlice: (state) => {
            state.count -= 1;
        },

        resetCounterSlice: (state) => {
            state.count = 0;
        },
    },
});

export const { plusCounterSlice, minusCounterSlice, resetCounterSlice } =
    countSlice.actions;

export default countSlice.reducer;

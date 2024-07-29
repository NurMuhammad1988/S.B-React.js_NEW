//store papkadagi bu indexda reduxni configlari saqlanadi 
import { configureStore } from "@reduxjs/toolkit";//npm install @reduxjs/toolkit reduxdan shu command bilan chaqirildi 

export default configureStore({
    reducer: {},
    //Reducer: Redux-da reduktor ilova va amalning joriy holatini argument sifatida qabul qiladigan va amal asosida yangi holatni qaytaradigan funksiyadir
});

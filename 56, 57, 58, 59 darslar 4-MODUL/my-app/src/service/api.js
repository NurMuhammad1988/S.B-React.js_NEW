import axios from "axios";
import { getItem } from "../helpers/persistance-storage";

axios.defaults.baseURL = "https://api.realworld.io/api";//yani asosiy url endi axiosni boshqa filelargaham chaqirib get post so'rovlar qilinganda asosiy server urlini yozish shart emas faqat linkni davomini yozsa bo'ldi 

axios.interceptors.request.use((config) => {//request yani so'rov jo'natish  
    // console.log(config);
    const token = getItem("token");
    // console.log(token);
    const authorization = token ? `Token ${token}` : "";
    // console.log(authorization);
    config.headers.Authorization = authorization;
    return config;
});
//axiosni interceptors parametri yordamida Authorization headerga userni tokeni berib qo'yildi 

export default axios;//endi axiosni boshqa filelarda ishlatganda axiosni bu papkadan import qilib olish kerak shu sabab bu joyda asosiy configli axios funksiya default qilib export qilingan 

//axiosni config qilish  
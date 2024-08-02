import axios from "axios";
// import { getItem } from "../helpers/persistance-storage";

axios.defaults.baseURL = "https://api.realworld.io/api";//yani asosiy url endi axiosni boshqa filelargaham chaqirib get post so'rovlar qilinganda asosiy server urlini yozish shart emas faqat damini yozsa bo'ldi 

// axios.interceptors.request.use((config) => {
//     const token = getItem("token");
//     const authorization = token ? `Token ${token}` : "";
//     config.headers.Authorization = authorization;
//     return config;
// });

export default axios;//endi axiosni boshqa filelarda ishlatganda axiosni bu papkadan import qilib olish kerak shu sabab bu joyda asosiy configli axios funkstsiya default qilib export qilingan 

//axiosni config qilish  
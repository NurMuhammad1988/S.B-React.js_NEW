import axios from "axios";
import { getItem } from "../helpers/persistance-storage";

axios.defaults.baseURL = "https://api.realworld.io/api";//yani asosiy url endi axiosni boshqa filelargaham chaqirib get post so'rovlar qilinganda asosiy server urlini yozish shart emas faqat linkni davomini yozsa bo'ldi 

axios.interceptors.request.use((config) => {//request yani so'rov jo'natish  use bu holatda metod yani parametr qabul qiladi bu parametrda axiosni o'zini parametrlari bor
    // console.log(config);
    //            dynamic   key
    const token = getItem("token");//bu getItem persistance-storage fileda deynamic yozib qo'yilgan buni keyi token axiosni interceptoriga chaqirilgan bu getItemda//yani token nomli o'zgaruvchi yaratib unga persistance-storage fileda dynamic get qiladigan getitemni parametriga key yozildi shunda persistance-storage filedagi getitemni keyida token bo'ladi desaham bo'ladi
    // console.log(token);
    const authorization = token ? `Token ${token}` : "";//bu authorization o'zgaruvchida yuqoridagi token o'zgaruvchiga ishlov berildi yani token true bo'lsa yani keyni localstorgga get qilsa  tokenni katta harifdan Token qilib keyin tokenni yoz agar yo'q bo'lsa yani token get qilinmasa bo'sh katak
    // console.log(authorization);
    config.headers.Authorization = authorization;//yani bu Authorization axiosni parametri yani bu axiosni parametrlari teng o'zimiz yaratgan authorization o'zgaruvchiga sabab?????
    return config;///???????????????????????????????????
});
//axiosni interceptors parametri yordamida Au thorization headerga userni tokeni berib qo'yildi 

export default axios;//endi axiosni boshqa filelarda ishlatganda axiosni bu papkadan import qilib olish kerak shu sabab bu joyda asosiy configli axios funksiya default qilib export qilingan 

//axiosni config qilish  
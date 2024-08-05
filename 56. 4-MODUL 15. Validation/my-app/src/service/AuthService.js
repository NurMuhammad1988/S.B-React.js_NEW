import axios from "./api";

const AuthService = {
    //constructor
    async userRegister() {
        const response = await axios.post("/users");
        //bu axios npmdan yuklangan axiosni aynan o'zimas api.jsda config qilingan axios shu sabab huddi o'zgaruvchiday import qilingan //bu holatda bu linklardan oldin ("/users"), ("/users/login"), ("/user") bu linklarni asosiy qismi yani serverni asosiy qismi api.jsda axiosga berib qo'yilgan shu sabab bu fileda get post so'rovlari jonatilganda kod uzun bo'lib ketmasligi uchun qilindi agar shunday qilinmasa har safar get post so'rovlar jo'natilganda server adressini uyani linkini qayta qayta yozish bunday ko'rinishda bo'lgan bo'lardi
    }, //constructor function

    async userRegister() {
        const response = await axios.post("/users/login");
    },

    async getUser() {
        const response = await axios.get("/user");
    },
};

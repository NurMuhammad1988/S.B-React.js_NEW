////Registerga oid server file
import axios from "./api";

const AuthService = {
    //constructor va ichida constructor functionlar
    async userRegister(user) {
        const response   = await axios.post("/users", { user }); //api.jsda ko'rsatilgan asosiy server urlini nomi yani serverda turgan users papkasiga post so'rov jo'natish
        return response.data//return response o'zgaruvchini ishga tushuradi
    },

    async userLogin(user) {
        const response = await axios.post("/users/login", {user});
        return response.data
    },

    async getUser() {
        //  const response = await axios.get("/user");
    },
};

export default AuthService;

//bu axios npmdan yuklangan axiosni aynan o'zimas api.jsda config qilingan axios shu sabab huddi o'zgaruvchiday import qilingan //bu holatda bu linklardan oldin ("/users"), ("/users/login"), ("/user") bu linklarni asosiy qismi yani serverni asosiy qismi api.jsda axiosga berib qo'yilgan shu sabab bu fileda get post so'rovlari jonatilganda kod uzun bo'lib ketmasligi uchun qilindi agar shunday qilinmasa har safar get post so'rovlar jo'natilganda server adressini uyani linkini qayta qayta yozish bunday ko'rinishda bo'lgan bo'lardi>>>>>>>>("https://api.realworld.io/api"/users/login")<<<bu esa kodni uzun qilib yuborardi shu sabab api.jsda axiosga serverni asosiy linki be4rib qo'yildi endi axios bu filega chaqirilib get post so'rovlar qilinib server linki berilganda asosiydan tashqari yani asosiy linkni davomi berib qo'yilsa bo'ldi api.jsdan import qilingan axiosda bu config bor

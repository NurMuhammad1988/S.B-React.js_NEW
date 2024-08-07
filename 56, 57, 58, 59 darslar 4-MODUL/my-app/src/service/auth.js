////Registerga oid server file

import axios from "./api";

const AuthService = {
    //constructor va ichida constructor functionlar
    async userRegister(user) {
        const { data } = await axios.post("/users", { user });
        //api.jsda ko'rsatilgan asosiy server urlini nomi yani serverda turgan users papkasiga post so'rov jo'natish
        return data; //return data o'zgaruvchini ishga tushuradi//bu holatda data o'zgaruvchi faqat dataga ishlasin deyildi shunda serverdan faqat data nomli object keladi shunda ro'yhatdan o'tgan userni asosiy malumotlarini o'zi bitta object ichida keladi
    },
    async userLogin(user) {
        const { data } = await axios.post("/users/login", { user });
        return data;
    },
    async getUser() {
        const { data } = await axios.get("/user"); //yani serverdan get qilib userni oldik va bu userni tokenini olib localstoragega qo'ydik
        return data;
    },
};

export default AuthService;

//bu axios npmdan yuklangan axiosni aynan o'zimas api.jsda config qilingan axios shu sabab huddi o'zgaruvchiday import qilingan //bu holatda bu linklardan oldin ("/users"), ("/users/login"), ("/user") bu linklarni asosiy qismi yani serverni asosiy qismi api.jsda axiosga berib qo'yilgan shu sabab bu fileda get post so'rovlari jonatilganda kod uzun bo'lib ketmasligi uchun qilindi agar shunday qilinmasa har safar get post so'rovlar jo'natilganda server adressini uyani linkini qayta qayta yozish bunday ko'rinishda bo'lgan bo'lardi>>>>>>>>("https://api.realworld.io/api"/users/login")<<<bu esa kodni uzun qilib yuborardi shu sabab api.jsda axiosga serverni asosiy linki be4rib qo'yildi endi axios bu filega chaqirilib get post so'rovlar qilinib server linki berilganda asosiydan tashqari yani asosiy linkni davomi berib qo'yilsa bo'ldi api.jsdan import qilingan axiosda bu config bor

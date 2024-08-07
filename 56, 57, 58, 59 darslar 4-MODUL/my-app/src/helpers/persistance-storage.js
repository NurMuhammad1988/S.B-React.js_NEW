export const setItem = (key, data) => {
    try {
        // key yani token auth.jsdagi setitem data esa token
        localStorage.setItem(key, data);//localstoragega key bilan day=tani set qilish yani o'rnatish bu keyda token bo'ladi data esa serverdan keladigan user objecti yani action.payload.token

        // yani key va data dynamic berib qo'yildi setItem localStorage.setItem holatda localstorageni metodi yani browserga set qiladi yani o'rnatadi nimani ? serverdan token keyi bilan keladigan userni malumotlarini set qiladi hato chiqsa   console.log("Error local storage");
    } catch (error) {
        console.log("Errorrr saving data");
    }
};//datani localstorgagega sahranit qilish

export const getItem = (key) => {//bu get bo'lgani uchun faqat keyni yani tokenni o'zini qabul qiladi
    // console.log(key);
    try {
        return localStorage.getItem(key);
    } catch (error) {
        console.log("Errorrr getting data");
    }
};//localstorgageda datani olish

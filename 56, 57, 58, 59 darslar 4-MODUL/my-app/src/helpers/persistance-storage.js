export const setItem = (key, data) => {
    try {
        // key yani token auth.jsdagi setitem data esa token
        localStorage.setItem(key, data);

        // yani key va data dynamic berib qo'yildi setItem localStorage.setItem holatda localstorageni metodi yani browserga set qiladi yani o'rnatadi nimani ? serverdan token keyi bilan keladigan userni malumotlarini set qiladi hato chiqsa   console.log("Error local storage");
    } catch (error) {
        console.log("Errorrr saving data");
    }
};

export const getItem = (key)=>{
    console.log(key);
    try {
       return localStorage.getItem(key)
    } catch (error) {
        console.log("Errorrr getting data");
    }
}
